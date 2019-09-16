//引入用户模块
let UserService = require('../Services/UserService');
module.exports.checkUser = function (req, res) {
    
    let user = JSON.parse(req.body.value)
    //解析提交数据
    let username = user.username;
    let password = user.password;
    //创建业务对象
    let userService = new UserService();
    userService.checkUser(username, password, function (ob) {
        //如果用户合法
        if (ob.code == 1) {

            req.session.login = true;
            //通过响应对象，向浏览器发送一给cookie数据，里面存放了键值对  键是user  值是对象 ，时效性是 10 * 1000
            res.cookie('user', {
                username: username,
                password: password
            }, {
                maxAge: 60 * 60 * 1000
            });
        }
        res.json(ob);
    });

}