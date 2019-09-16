let SqlBase = require('./SqlBase');
class NewslistModel extends SqlBase {
    constructor() {
        super();
    }

    // 新闻列表数据查询
    newslistSelect(call) {

        let sql=`select * from newlist `
        
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }

    // 根据分类进行搜索
    newSearch(classify,call){
        let sql=`select * from newlist where classify LIKE '%${classify}%' `
        
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }

}

module.exports = NewslistModel;