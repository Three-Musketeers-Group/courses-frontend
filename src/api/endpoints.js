// TODO: find a way to pass env variable here instead of hardcode
const API_URL = 'http://104.236.31.192:8000/api/v1';

export const endpoints = {
  refresh: `${API_URL}/students/auth/refresh`,
  login: `${API_URL}/students/sign-in`,
  registration: `${API_URL}/students/sign-up`,
  verification: (code) => `${API_URL}/students/verify/${code}`,
  admin: {
    refresh: `${API_URL}/admins/auth/refresh`,
    login: `${API_URL}/admins/sign-in`,
  },
  courses: {
    getAll: `${API_URL}/courses`,
  },
};
