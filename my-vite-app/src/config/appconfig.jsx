const AUTH_URL = "http://localhost:5173";
const API_URL = "http://localhost:3001";
const appConfig = {
  Auth: {
    LOGIN_URL: `${API_URL}/login`,
    refreshTokenURL: `${API_URL}/refresh`,
  },
};
export default appConfig;
