//引入基类
let SqlBase = require('./SqlBase');
class UserModel extends SqlBase {
    constructor() {
        super();
    }

    // 轮播数据查询
    userinforSelect(call) {

        let sql=`select * from userinfor `
        
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }
}

module.exports = UserModel;