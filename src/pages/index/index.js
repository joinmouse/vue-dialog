import Vue from 'vue'
import axios from 'axios'

//导入css
import 'css/common.css'
import './index.css'

//导入mock数据的url
import url from 'js/api.js'


let app = new Vue({
  el: '#app',
  data: {
    lists: null
  },
  //created可以拿到Vue的实例(this)
  created() {
    axios.post(url.hotLists,{
      pageNum: 1,
      pageSize: 6
    }).then(res => {
      this.lists = res.data.lists
    })    
  }
})
