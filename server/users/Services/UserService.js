let UserModel = require('../Models/UserModel');
class UserService {
    constructor() {
        this.userModel = new UserModel();
    }

    // 登录
    checkUser(username, password, callback) {

        let ob = {
            msg: "用户不存在",
            code: -1
        }

        this.userModel.selectByName(username, function (users) {
            if (users.length < 1) {
                callback(ob);
                return;
            }

            //获得用户对象
            let user = users[0];
            // console.log(user);
            //获得用户的密码
            let buffer = user.password;
            if(user.username=='root'&&buffer==password){
                ob.msg = "管理员账号";
                ob.code=2
            }
            else if (buffer == password) {
                ob.msg = "用户合法";
                ob.code = 1;
                ob.username=username
            } 
            else {
                ob.msg = "用户密码错误，请重新验证";
                ob.code = 0;
            }
            callback(ob);
        });
    }

    // 注册
    addUser(username,password,email,prefix,phone, callback) {

        let ob = {
            msg: "用户存在",
            code: -1
        }

        let that = this;

        console.log(11);

        this.userModel.selectByName(username, function (users) {
            //如果根据名字查询的用户已经存在，就给用户返回【用户已经存在】
            console.log(22);
            if (users.length >= 1) {
                callback(ob);
                return;
            }
            console.log(33);
            //如果用户不存在，就插入新用户
            that.userModel.insertUser(username,password,email,prefix,phone, function (data) {
                console.log(44);
                ob.msg = "注册成功";
                ob.code = 1;
                console.log(data);
                callback(ob);
            });


        });
    }

    // 修改密码
    getPasswordInfor(username,password,oldpassword,callback){
        this.userModel.passwordInfor(username,password,oldpassword,(ob)=>{
            callback(ob)
        })

    }

}

module.exports = UserService;