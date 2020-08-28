import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://cheninccc.cn:3000';
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';

export default axios;