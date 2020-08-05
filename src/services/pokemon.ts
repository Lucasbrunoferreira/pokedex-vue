import axios from '@/config/axios';

export default {
  getByName: (name: string) => axios.get(`/pokemon/${name}`),
  getByCode: (code: number) => axios.get(`/pokemon/${code}`),
};
