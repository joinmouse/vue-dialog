let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
  topList: '/category/topList',
  subList: '/category/subList',
  rank: '/category/rank'
}

//注意开发环境和上线(真实场景)的切换
//mock数据的host地址
let host = 'http://rap.taobao.org/mockjsdata/24170'

for (let key in url) {
  if (url.hasOwnProperty(key)){
    url[key] = host + url[key]
  }
}

//test => node api.js
//console.log(url.banner)

export default url