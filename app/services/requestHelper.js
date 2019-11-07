/* eslint-disable prettier/prettier */
import axios from 'axios';
import { apiEndpoint } from './constants';

axios.defaults.baseURL = apiEndpoint;

export const requestHelper = ({ method, options }) => {
  const processedOptions = options;

  if ('headers' in processedOptions) {
    processedOptions.headers.Authorization = `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`;
  }

  return axios({
    method,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
    ...options,
  }).then(res => res).catch(err => err.response);
}
