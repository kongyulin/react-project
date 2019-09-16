//引入基类
let SqlBase = require('./SqlBase');
class NewsModel extends SqlBase {
    constructor() {
        super();
    }

    // 插入新闻信息
    insertNews(title, img, classify, keyword1, keyword2, keyword3,time,  collection,call) {

        let sql = `insert into newlist(title,img,classify,keyword1,keyword2,keyword3,time,collection) values('${title}','${img}','${classify}','${keyword1}','${keyword2}','${keyword3}','${time}','${collection}')`;
        
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }

    // 获取信息
    newSelect(call){
        let sql = `select * from newlist`;
        
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }

    // 删除信息
    newsDelete(delete2,call){
        let sql = `delete from newlist where keyword1='${delete2}'`;
        
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }

    // 根据id修改相应的标题
    newChange(collection1,collection2,call){
        let sql = `UPDATE newlist SET title='${collection1}' WHERE id='${collection2}' `;
        
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }

    // 根据收藏数量排序
    newsCollection(call){
        let sql = 'select * from newlist order by time DESC';
        
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }
}

module.exports = NewsModel;