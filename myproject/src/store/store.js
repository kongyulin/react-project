
const store = {

    // 用户名
    userData: '',

    // 用户个人信息
    userInfor:[],

    // 搜索页面数据显示
    newslistData: [],

    // 首页列表信息
    indexlistData: [],

    // 首页搜索的关键词
    searchData: {},

    // 点击跳转到新闻详情的id
    news_id: '',
    // 详情页面的数据
    detialData: [],

    // 收藏
    collectionData: [],

    // 后台新闻管理数据
    adminData: [],

    // 轮播图
    imgData: [],

    // 后台用户数据管理
    usersData: [],

    // 个人主页取消收藏
    deleteChangeData:[],

    // 详情页面收藏和取消收藏判断条件
    flagData:1
}

export default store