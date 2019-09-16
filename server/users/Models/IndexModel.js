//引入基类
let SqlBase = require('./SqlBase');
class IndexModel extends SqlBase {
    constructor() {
        super();
    }

    // 轮播数据查询
    imgSelect(call) {

        let sql=`select * from news_img `
        
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }
}

module.exports = IndexModel;