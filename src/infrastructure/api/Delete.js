import axios from 'axios';
import { ROOTURL } from '../../application/common/index';

export const Delete = (endpoint, header) => {
  return axios.delete(`${ROOTURL}/${endpoint}`, header);
};
