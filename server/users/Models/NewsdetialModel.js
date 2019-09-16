//引入基类
let SqlBase = require('./SqlBase');
class NewsdetialModel extends SqlBase {
    constructor() {
        super();
    }

    // 新闻详情数据查询
    newsdetialSelect(detial_id,call) {

        let sql=`select * from newsdetial where detial_id='${detial_id}' `
        
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }
}

module.exports = NewsdetialModel;