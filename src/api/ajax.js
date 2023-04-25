// ajax请求函数模块
// 返回值promise对象（异步返回的数据是： response.data !!  )
import axios from 'axios'

export default function ajax(url = '',data = {},type = 'GET'){
    return new Promise(function(resolve,reject){
        //执行异步ajax请求
        let Promise
        
        if(type === 'GET'){
            //准备URL query参数数据
            let dayaStr = ''  //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] +'&'
            })
            if(dataStr !== ''){
                dataSte = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }else {
                //发送post请求
                promise = axios.post(url,data)
            }
        }
        //成功了调用resolve()   失败了调用reject()
        //成功的回调函数要调用成功的数据！！
        promise.then(response =>{
            resolve(response.data)
        })
        .catch(error => {
            reject(error)
        })
    })
}

/* 
本来是这样：
const response = await ajax()
const result = response.data

但希望的是实现下面这种效果
const result = await ajax() 

本来只有一层封装，但是希望的是返回data，则需要再封装一层 
即

return new Promise(function (resolve,reject){
    //执行异步ajax请求

    //成功了调用resolve()
    //失败了调用reject()
    //成功的回调函数要调用成功的数据！！
})
*/