import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[]; 
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
     key: '9b8252696ee34a769883fcc49d9a82ed'   
    }
}) 

class APIClient<T>{
    endpoint: string;
     
    constructor(endpoint: string){
    this.endpoint = endpoint;
    }
   
    getAll = (config: AxiosRequestConfig) => 
     axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)

    get = (id: number | string) => {
       return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
    }
} 

export default APIClient;