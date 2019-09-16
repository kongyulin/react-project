let SqlBase = require('./SqlBase');
class UserModel extends SqlBase {
    constructor() {
        super();
    }

    // 查询用户数据
    selectByName(username,callback) {
        let sql = `select * from userinfor where username='${username}'`;

        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }

    // 添加用户数据
    insertUser(username,password,email,prefix,phone, callback) {
        let sql = `insert into userinfor(username,password,email,prefix,phone) values('${username}','${password}','${email}','${prefix}','${phone}')`;

        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    // 修改密码
    passwordInfor(username,password,oldpassword,callback){
        let sql = `UPDATE userinfor SET password='${password}' WHERE username='${username}'`;

        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }
}
module.exports = UserModel;