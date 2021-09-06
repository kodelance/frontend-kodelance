import axios from 'axios';
import { ROOTURL } from '../../application/common/index';

export const Put = (endpoint, body, header) => {
  return axios.put(`${ROOTURL}/${endpoint}`, body, header);
};
