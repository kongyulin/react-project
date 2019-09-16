let bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.listen(8081, function () {
    console.log(88);
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
})

//引入cookie
var cookieParser = require('cookie-parser');
app.use(cookieParser());
//引入session
var session = require('express-session');
app.use(session({
    secret: '12345',
    name: '06session', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
}));

// 管理员的相关接口
// 用户信息管理
let userController=require('./server/admin/Controllers/UserController')
app.post('/userdata',userController.userdata)
// 新闻列表管理
let newsController=require('./server/admin/Controllers/NewsController')
// 1.上传信息
app.post('/newsdata',newsController.newsdata)
// 2.获取信息
app.post('/news',newsController.news)
// 根据新闻发表时间删除
app.post('/delete1',newsController.delete1)
// 根据id修改相应的标题
app.post('/change1',newsController.change1)
// 根据收藏数量排序
app.post('/collection1',newsController.collection1)



// 用户的相关接口
//引入index控制器
// let controller = require('./Controllers/IndexController');
// app.get('/index', controller.index);

// 登录
let loginController = require('./server/users/Controllers/LoginController');
app.post('/login',loginController.checkUser);

// 注册
let registerController = require('./server/users/Controllers/RegisterController');
app.post('/register', registerController.addUser);



// 首页
let indexController=require('./server/users/Controllers/IndexController')
// 获取轮播图
app.post('/slider',indexController.slider)
// 获取新闻列表
app.post('/newslist',indexController.newslist)
// 根据分类搜索
app.post('/newsearch',indexController.newsearch)
// 新闻详情
app.post('/newsdetial',indexController.newsdetial)
// 收藏
app.post('/userlist',indexController.userlist)
// 获取收藏列表
app.post('/userss',indexController.userss)
// 新闻详情取消收藏
app.post('/deteleCollection1',indexController.deteleCollection1)



// 个人主页
// 个人主页点击取消收藏
app.post('/deteleCollection',indexController.deteleCollection)
// 修改密码
app.post('/passwordInfor',registerController.passwordInfor)
