let UserService=require('../Services/UserService')

module.exports.userdata=function(req,res){
    let userService=new UserService()
    userService.getUserinfor((ob)=>{
        res.json(ob)
    })
}
