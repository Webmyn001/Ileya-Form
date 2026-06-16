const DEV_API = 'http://localhost:5000';
const PROD_API = '';

const API_BASE = process.env.REACT_APP_API_URL
  || (process.env.NODE_ENV === 'production' ? PROD_API : DEV_API);

export const API = {
  forms: `${API_BASE}/api/form`,
  formAdd: `${API_BASE}/api/form/add`,
  formById: (id) => `${API_BASE}/api/form/${id}`,
};
