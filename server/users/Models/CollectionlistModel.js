let SqlBase = require('./SqlBase');
class CollectionlistModel extends SqlBase {
    constructor() {
        super();
    }
    // 添加收藏数据
    collectionInsert(id,title,img, callback) {
        //编写sql语句
        let sql = `insert into collectionlist(title,img,news_id) values('${title}','${img}','${id}')`;

        console.log(sql);

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    // 获取收藏列表
    collectionSelect(call){
        let sql = `select * from collectionlist `;

        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            call(result);
        });
    }

    // 个人主页取消收藏
    collectionDelete(id,call){
        let sql = `delete from collectionlist where id='${id}' `;

        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            call(result);
        });
    }

    // 新闻详情取消收藏
    collectionDelete1(id,call){
        let sql = `delete from collectionlist where news_id='${id}' `;

        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            call(result);
        });
    }

}
module.exports = CollectionlistModel;