let IndexModel=require('../Models/IndexModel')
let NewslistModel =require('../Models/NewslistModel')
let NewsdetialModel=require('../Models/NewsdetialModel')
let CollectionlistModel=require('../Models/CollectionlistModel')

class IndxService{
    constructor(){
        this.indexModel=new IndexModel()
        this.newslistModel=new NewslistModel()
        this.newsdetialModel=new NewsdetialModel()
        this.collectionlistModel=new CollectionlistModel()
    }

    // 轮播数据获取
    getImg(callback){
        this.indexModel.imgSelect((ob)=>{
            callback(ob)
        })
    }

    // 新闻列表数据获取
    getNewslist(callback){
        this.newslistModel.newslistSelect((ob)=>{

            callback(ob)
        })
    }

    // 根据分类搜索
    getSearch(classify,callback){
        this.newslistModel.newSearch(classify,(ob)=>{
            
            callback(ob)
        })
    }

    // 新闻详情
    getNewsdetial(detial_id,callback){
        this.newsdetialModel.newsdetialSelect(detial_id,(ob)=>{
            callback(ob)
        })
    }

    // 收藏
    getUserlist(id,title,img,callback){
        this.collectionlistModel.collectionInsert(id,title,img,(ob)=>{
            callback(ob)
        })
    }

    // 获取收藏列表
    getCollection(callback){
        this.collectionlistModel.collectionSelect((ob)=>{
            callback(ob)
        })
    }

    // 个人主页取消收藏
    getDeteleCollection(id,callback){
        this.collectionlistModel.collectionDelete(id,(ob)=>{
            callback(ob)
        })
    }

    // 新闻详情取消收藏
    getDeteleCollection1(id,callback){
        this.collectionlistModel.collectionDelete1(id,(ob)=>{
            callback(ob)
        })
    }
}

module.exports=IndxService;

