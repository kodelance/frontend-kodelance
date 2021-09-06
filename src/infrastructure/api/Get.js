import axios from 'axios';
import { ROOTURL } from '../../application/common/index';

export const Get = (endpoint) => {
  return axios.get(`${ROOTURL}/${endpoint}`);
};
