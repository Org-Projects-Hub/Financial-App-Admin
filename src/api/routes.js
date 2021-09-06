let URL = "";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  URL = "http://localhost:8000";
} else {
  URL = "https://api.uwnelafinapp.com";
}

const API = {
  auth: `${URL}/admin/auth`,
  login: `${URL}/admin/login`,
  addOrganization: `${URL}/organizations/add`,
  getOrganizations: `${URL}/organizations`,
  deleteOrganization: `${URL}/organizations`,
  getTeachers: `${URL}/users/teachers`,
  authorizeTeacher: `${URL}/users/teachers/authorize`,
  organizationStats: `${URL}/organizations/stats/`,
};

export { URL, API };
