let URL = "http://localhost:8000";

const API = {
  addOrganization: `${URL}/organizations/add`,
  getOrganizations: `${URL}/organizations`,
  deleteOrganization: `${URL}/organizations`,
  getTeachers: `${URL}/users/teachers`,
  authorizeTeacher: `${URL}/users/teachers/authorize`,
  organizationStats: `${URL}/organizations/stats`,
};

export { URL, API };
