import axios from 'axios';

const djangoAPI = axios.create({
  baseURL: 'https://djangoteam.herokuapp.com/api',
});

export default djangoAPI;
