import { getLocalStorage, setLocalStorage } from "../utils/others";

function header() {
  return { "Content-Type": "application/json" };
}

function authHeader() {
  let authtoken = getLocalStorage("finapp_admin_token");
  return { "Content-Type": "application/json", token: authtoken };
}

export { header, authHeader };
