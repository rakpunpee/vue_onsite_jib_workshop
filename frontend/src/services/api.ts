import httpClient from "@/services/httpClient";
import { server } from "@/services/constants";
import * as productApis from "@/services/api_product";
import * as transactionApis from "@/services/api_transaction";
import router from "@/router";

const register = async (values: any) => {
  const result = await httpClient.post(server.REGISTER_URL, values);
  if (result.data.result == "ok") {
    router.push("login");
    return true;
  } else {
    return false;
  }
};

const isLoggedIn = () => {
  const token = localStorage.getItem(server.TOKEN_KEY);
  return token != null;
};

const logoff = () => {
  localStorage.clear();
  router.push("/login");
};

const login = async (values: any) => {
  const result = await httpClient.post(server.LOGIN_URL, values);
  if (result.data.result == "ok") {
    localStorage.setItem(server.USERNAME, values.username);
    localStorage.setItem(server.TOKEN_KEY, result.data.token);
    router.push("/stock");
    return true;
  } else {
    return false;
  }
};

export default {
  register,
  login,
  logoff,
  isLoggedIn,
  ...productApis,
  ...transactionApis,
};
