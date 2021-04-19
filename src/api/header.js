import { getLocalStorage, setLocalStorage } from "../utils/others";

function header() {
  return { "Content-Type": "application/json" };
}

function authHeader() {
  let authtoken = getLocalStorage("token");
  return { "Content-Type": "application/json", token: authtoken };
}

export { header, authHeader };
