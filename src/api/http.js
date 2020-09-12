import axios from 'axios';
import {HOST} from './url';

class Http{
  constructor(base_url){
    this.base_url = base_url;
  }

  request(url, method = 'GET', data = {}){
    let options = {
      url,
      method,
      baseURL: this.base_url
    };
    if (method === 'GET') {
      options = {
        ...options,
        params: data,
      }
    }else if(method === 'POST'){
      options = {
        ...options,
        data
      }
    }
    const instance = axios.create();
    return instance.request(options);
  }
  
  get(url,data = {}){
    return this.request(url, 'GET', data);
  }

  post(url,data = {}){
    return this.request(url, 'POST', data);
  }
}
export default new Http(HOST);

