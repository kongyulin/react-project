let LogindexService = require('../Services/LogindexService');
module.exports.index = function (req, res) {

    if (req.session.login) {
        res.render('index', {});
        console.log("进入主页面");
        return;
    }
    //从cookies里面获得数据
    let user = req.cookies.user;
    //创建业务逻辑对象 
    let logindexService = new LogindexService();
    //验证用户是否存在
    logindexService.checkUser(user, function (ob) {

        if (ob.code == 1) {
            //服务器记录用户登录状态
            req.session.login = true;
            res.render('index', {});
        } else {
            res.redirect('login');
        }
    });

}