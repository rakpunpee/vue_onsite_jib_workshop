export const verify = (req, res, next) => {
  if (req.query.token == "1234") {
    next();
  } else {
    res.end("Unauthorized");
  }
};
