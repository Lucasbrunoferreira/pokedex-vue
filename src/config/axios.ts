import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
