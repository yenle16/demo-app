
const baseUrl = process.env.EXPO_PUBLIC_BASE_URL

const apiRoutes = {
  login: baseUrl + "/auth/login",
  check_user: baseUrl + "/auth/check",

};

export default apiRoutes;