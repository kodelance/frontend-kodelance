import axios from 'axios';
import { ROOTURL } from '../../application/common/index';

export const Post = (endpoint, body, header) => {
  return axios.post(`${ROOTURL}/${endpoint}`, body, header);
};
