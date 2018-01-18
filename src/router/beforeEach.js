import axios from 'axios';
import api from '@/js/api-config.js';
let noLoginCheckPage = [
    'index',
    'goodsList',
    'goodsDetail',
    'shopcart'
]
export default function (to, from, next) {
    console.log(to);
    var toPageName = to.name;
    if (noLoginCheckPage.some(v => v == toPageName)) {
        next();
    }
    // 请求接口判断用户有没有登陆
    axios.get(api.isLogin).then(res => {

        let isLogin = false;

        if (res.data.code == 'logined') {
            isLogin = true;
        }
        // 用户访问登陆页面, 如果已登陆, 那么自动转到首页
        if(noLoginCheckPage.some(v => v == toPageName)){
            return next();
        }
        // 用户访问后台管理页面, 但是他没有登陆, 那么自动转到登陆页
        else if (toPageName != 'login' && !isLogin) {
            // 跳转到登陆时, 把当前页面通过url参数记录下来 
            next({ name: 'login', query: { nextPage: to.fullPath } });
        }
        else {
            next();
        }
    });
}