import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
     key: '9b8252696ee34a769883fcc49d9a82ed'   
    }
}) 