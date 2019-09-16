let IndxService=require('../Services/IndxService')


// 轮播
module.exports.slider=function(req,res){
    let indxService=new IndxService();
    indxService.getImg((ob)=>{
        res.json(ob)
    })
}

// 新闻列表
module.exports.newslist=function(req,res){
    let indxService=new IndxService();
    indxService.getNewslist((ob)=>{
        res.json(ob)
    })
}

// 根据分类搜索
module.exports.newsearch=function(req,res){
    let classify=req.body.value;

    let indxService=new IndxService();
    indxService.getSearch(classify,(ob)=>{
        res.json(ob)
    })
}

// 新闻详情
module.exports.newsdetial=function(req,res){
    let detial_id=req.body.detial_id

    let indxService=new IndxService();
    indxService.getNewsdetial(detial_id,(ob)=>{
        
        res.json(ob)
    })
}

// 收藏
module.exports.userlist=function(req,res){
    // console.log(req.body)
    
    let id=req.body.id
    let title=req.body.title
    let img=req.body.img
    let indxService=new IndxService();
    indxService.getUserlist(id,title,img,(ob)=>{
        console.log(ob)
        res.json(ob)
    })
}

// 获取收藏列表
module.exports.userss=function(req,res){
    let indxService=new IndxService();
    indxService.getCollection((ob)=>{
        res.json(ob)
    })
}

// 个人主页取消收藏
module.exports.deteleCollection=function(req,res){
    let id=req.body.id
    let indxService=new IndxService();
    indxService.getDeteleCollection(id,(ob)=>{
        res.json(ob)
    })
}

// 新闻详情取消收藏
module.exports.deteleCollection1=function(req,res){
    let id=req.body.id
    let indxService=new IndxService();
    indxService.getDeteleCollection1(id,(ob)=>{
        res.json(ob)
    })
}
