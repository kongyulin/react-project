let UserModel=require('../Models/UserModel')

class UserService{
    constructor(){
        this.userModel=new UserModel()
    }

    // 获取用户信息
    getUserinfor(callback){
        this.userModel.userinforSelect((ob)=>{
            callback(ob)
        })
    }

}


module.exports=UserService
