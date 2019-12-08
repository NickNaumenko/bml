import axios from 'axios';
const API_URL = 'http://localhost:3001/api/';

axios.defaults.baseURL = API_URL;

export default async function callWebApi(config) {
  try {
    return axios(config);
  } catch (error) {
    console.log(error.message);
  }
}
