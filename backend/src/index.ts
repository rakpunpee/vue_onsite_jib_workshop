import cors = require("cors");
import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import jwt from "./utils/jwt";
import * as myInterceptor from "./utils/my.interceptor";
AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(express.json());
    app.use(cors());
    const rootPath = process.env.ROOT_PATH ? process.env.ROOT_PATH : __dirname;
    console.log(rootPath);
    app.use(express.static(rootPath + "/uploaded"));

    // app.get("/user", (req, res)=>{
    // res.json([1,2,2])
    // })

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        "/api/v2" + route.route,
        // myInterceptor.verify,
        jwt.verify,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // setup express app here
    // ...

    // start express server
    app.listen(8081);

    console.log(
      "Express server has started on port 8081. Open http://localhost:8081/api/v2/products to see results"
    );
  })
  .catch((error) => console.log(error));
