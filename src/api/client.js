import axios from '../config/axios-client';


//获取全部文章
export function getAllArticle(){
	const res = axios.get('/api/client/getAllArticle');
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//获取文章
export function getArticle(data){
	const res = axios.get('/api/client/getArticle?id=' + data);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//获取评论
export function getComment(data){
	const res = axios.get('/api/client/getComment?id=' + data);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//获取多级评论
export function getChildrenComment(data){
	const res = axios.get('/api/client/getChildrenComment?id=' + data);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//发表评论
export function postAddComment(data){
	const res = axios.post('/api/client/addComment', data);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve();
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//获取标签
export function getTags(data){
	const res = axios.get('/api/client/getTags');
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}
