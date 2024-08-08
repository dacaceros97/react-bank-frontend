const API_BASE_URL = 'http://localhost:8080/api';

const endpoints = {
  getAllAccounts: `${API_BASE_URL}/accounts`,
  getAccountById: (id) => `${API_BASE_URL}/accounts/${id}`,
  deposit: (id) => `${API_BASE_URL}/accounts/${id}/deposit`,
  withdraw: (id) => `${API_BASE_URL}/accounts/${id}/withdraw`,
  deleteAccount: (id) => `${API_BASE_URL}/accounts/${id}`,
  createAccount: `${API_BASE_URL}/accounts`,
};

export default endpoints;