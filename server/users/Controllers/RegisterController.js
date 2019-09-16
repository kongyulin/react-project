let UserService = require('../Services/UserService');

// 注册信息
module.exports.addUser = function (req, res) {
    let user=JSON.parse(req.body.value)
    //解析提交数据
    let username = user.username;
    let password = user.password;
    let email = user.email;
    let prefix = user.prefix;
    let phone = user.phone;
    console.log(username,password,email,prefix,phone)
    //创建业务对象
    let userService = new UserService();
    // //验证用户是否合法
    userService.addUser(username,password,email,prefix,phone, function (ob) {
        //如果用户合法
        if (ob.code == 1) {
            req.session.login = true;
        }
        res.json(ob);
    });
}

// 修改密码
module.exports.passwordInfor=function(req,res){
    let password1 = JSON.parse(req.body.value)
    let username = password1.username1;
    let password = password1.password;
    let oldpassword = password1.oldpassword;

    let userService = new UserService();
    userService.getPasswordInfor(username,password,oldpassword, function (ob) {
        res.json(ob);
    });
}
