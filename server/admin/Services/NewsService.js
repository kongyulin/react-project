let NewsModel = require('../Models/NewsModel')

class NewsService {
    constructor() {
        this.newsModel = new NewsModel()
    }

    // 提交新闻信息
    getNews(title, img, classify, keyword1, keyword2, keyword3,time, collection, callback) {
        
        this.newsModel.insertNews(title, img, classify, keyword1, keyword2, keyword3,time, collection, (ob) => {
            ob.msg = "提交成功";
            ob.code = 1;
            callback(ob)
        })
    }
    // 获取信息
    getNewslist(callback){
        this.newsModel.newSelect((ob)=>{

            callback(ob)
        })
    }

    // 删除信息
    getDelete(delete2,callback){
        this.newsModel.newsDelete(delete2,(ob)=>{
            callback(ob)
        })
    }

    // 根据id修改相应的标题
    getChange(collection1,collection2,callback){
        this.newsModel.newChange(collection1,collection2,(ob)=>{
            callback(ob)
        })
    }

    // 根据收藏数量排序
    getCollection(callback){
        this.newsModel.newsCollection((ob)=>{
            callback(ob)
        })
    }
}


module.exports = NewsService
