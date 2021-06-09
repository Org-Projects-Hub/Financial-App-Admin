let URL = "http://localhost:8000";

const API = {
  addOrganization: `${URL}/organizations/add`,
  getOrganizations: `${URL}/organizations`,
  deleteOrganization: `${URL}/organizations`,
  getTeachers: `${URL}/users/teachers`,
};

export { URL, API };
