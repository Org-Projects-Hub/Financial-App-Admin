import { setLocalStorage } from "./others";

const logoutAndRedirect = () => {
  setLocalStorage("finapp_admin_token", null);
  window.location.href = window.location.origin + "/login";
};

const logoutTimer = () => {
  setTimeout(logoutAndRedirect, 3600000);
  setTimeout(() => {
    alert("You will be logout automatically in 1 minute!");
  }, 3540000);
};

export { logoutAndRedirect, logoutTimer };
