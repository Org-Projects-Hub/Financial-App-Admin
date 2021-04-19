import { authGet, post, authPost, authPut, get } from "./request";
import { API } from "./routes";

export default {
  //User Route

  addOrganization: (data) => {
    return authPost(API.addOrganization, data);
  },
};
