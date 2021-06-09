import { authGet, post, authPost, authPut, get, authDelete } from "./request";
import { API } from "./routes";

export default {
  //User Route

  addOrganization: (data) => {
    return authPost(API.addOrganization, data);
  },
  getOrganizations: () => {
    return get(API.getOrganizations);
  },
  deleteOrganization: (name) => {
    return authDelete(API.deleteOrganization, { name });
  },

  getTeachers: () => {
    return authGet(API.getTeachers, "");
  },
};
