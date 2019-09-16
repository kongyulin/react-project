let NewsService=require('../Services/NewsService')

// 提交数据
module.exports.newsdata=function(req,res){
    let newsData = JSON.parse(req.body.value)
    // 解析数据
    let title=newsData.title;
    let img=newsData.img;
    let classify=newsData.classify;
    let keyword1=newsData.keyword1;
    let keyword2=newsData.keyword2;
    let keyword3=newsData.keyword3;
    let time=newsData.time;
    let collection=newsData.collection;
    
    let newsService=new NewsService()
    newsService.getNews(title,img,classify,keyword1,keyword2,keyword3,time,collection,(ob)=>{
        res.json(ob)
    })
}

// 获取数据
module.exports.news=function(req,res){
    let newsService=new NewsService();
    newsService.getNewslist((ob)=>{
        res.json(ob)
    })
}

// 根据新闻发表时间删除
module.exports.delete1=function(req,res){
    let delete1 =JSON.parse(req.body.value)
    let delete2=delete1.delete
    console.log(delete2)

    let newsService=new NewsService()
    newsService.getDelete(delete2,(ob)=>{
        res.json(ob)
    })
}

// 根据id修改相应的标题
module.exports.change1=function(req,res){
    let value=JSON.parse(req.body.value)
    let collection1=value.value1;
    let collection2=value.value2;

    let newsService=new NewsService()
    newsService.getChange(collection1,collection2,(ob)=>{
        res.json(ob)
    })

}

// 根据收藏数量排序
module.exports.collection1=function(req,res){
    let newsService=new NewsService()
    newsService.getCollection((ob)=>{
        res.json(ob)
    })
}

