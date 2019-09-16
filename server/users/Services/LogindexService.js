//引入Usermodel
let UserModel = require('../Models/UserModel');
class LogindexService {
    constructor() {
        this.userModel = new UserModel();
    }

    checkUser(user, callback) {
        let ob = {
            code: -1
        }

        if (user == null) {
            //客户端根本就没有提供任何数据，用户需要先到登录页面进行登录
            callback(ob);
            return;
        }
        //引入UserService
        let UserService = require('./UserService');
        //创建对象
        let userService = new UserService();
        //验证用户
        userService.checkUser(user.name, user.passwd, function (ob) {
            callback(ob);
        });
    }

}

module.exports = LogindexService;