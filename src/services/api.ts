import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.mocky.io/v2/5d3b57023000005500a2a0a6',
});

export default api;
