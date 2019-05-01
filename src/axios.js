import axios from 'axios';
//创建axios实例
var instance = axios.create({
    baseURL: '/api'
});

//拦截器
instance.interceptors.response.use(
    function(response){
        return response;
    },function(error){
         if(error.response.status==404){
            return {
                data : "Hello Axios"
            }
        }
    })
export default instance;