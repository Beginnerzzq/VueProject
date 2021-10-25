//统一管理项目全部接口的文件
//获取真实服务器的接口的数据利用当前axios
import request from './request';
//如果获取mock接口的数据，利用底下axios
import mockRequest from './mockRequest';
//商品分类的数据接口
export const reqCategoryList = ()=>{
  //将服务器返回的数据（promise对象）让函数返回，可以让组件获取到
  //没有return返回结果即为undefined    
 return request({url:'/product/getBaseCategoryList',method:'get'});
}

//通过mockRequest（axios实例）获取相应的mock数据
export const reqGetBannerList = ()=>mockRequest({url:'/banner',method:'get'});

