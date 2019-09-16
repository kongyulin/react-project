import store from './store'

const reducer = (state = store, action) => {
    switch (action.type) {
        // 用户名
        case "USER_DATA":
            let userState = JSON.parse(JSON.stringify(state))
            userState.userData = action.value
            return userState

        // 搜索页面数据显示
        case "NEWS_DATA":
            let newslistState = JSON.parse(JSON.stringify(state))
            newslistState.newslistData = action.value
            return newslistState

        // 根据首页分类搜索到的信息
        case "KEYWORD_DATA":
            let searchState = JSON.parse(JSON.stringify(state))
            searchState.searchData = action.value
            return searchState

        // 分类页面搜索信息保存
        case "CLASS_DATA":
            let classState = JSON.parse(JSON.stringify(state))
            classState.newslistData = action.value
            return classState

        // 首页列表信息
        case "NEWSLIST_DATA":
            let indexState = JSON.parse(JSON.stringify(state))
            indexState.indexlistData = action.value
            return indexState

        // 收藏
        case "COLLECTION_DATA":
            let collectionState = JSON.parse(JSON.stringify(state))
            collectionState.collectionData = action.value
            return collectionState

        // 点击跳转到新闻详情的id
        case "NEWDETIAL_DATA":
            let newsidState = JSON.parse(JSON.stringify(state))
            newsidState.news_id = action.value
            return newsidState

        // 详情页面的数据
        case "DETIAL_DATA":
            let detialState = JSON.parse(JSON.stringify(state))
            detialState.detialData = action.value
            return detialState

        // 后台新闻管理数据
        case "ADMINNEWS_DATA":
            let adminlState = JSON.parse(JSON.stringify(state))
            adminlState.adminData = action.value
            return adminlState

        // 后台新闻数据根据时间进行排序
        case "SORT_DATA":
            let sortState = JSON.parse(JSON.stringify(state))
            sortState.adminData = action.value
            return sortState

        // 轮播图
        case "IMG_DATA":
            let imgState = JSON.parse(JSON.stringify(state))
            imgState.imgData = action.value
            return imgState

        // 后台用户信息管理
        case "USERINFOR_DATA":
            let usersState = JSON.parse(JSON.stringify(state))
            usersState.usersData = action.value
            return usersState

        // 个人主页取消收藏
        case "DELETECHANGE_DATA":
            let deleteChangeState = JSON.parse(JSON.stringify(state))
            deleteChangeState.deleteChangeData = action.value
            return deleteChangeState

        // 详情页面收藏和取消收藏判断条件
        case "FLAG_DATA":
            let flagState = JSON.parse(JSON.stringify(state))
            flagState.flagData = action.value
            return flagState

        default:
            return state;
    }
}

export default reducer