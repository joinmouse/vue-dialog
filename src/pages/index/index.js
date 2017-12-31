import Vue from 'vue'
import axios from 'axios'
//导入css
import 'css/common.css'
import './index.css'
//导入mock数据的url
import url from 'js/api.js'
//导入mint-ui无线滚动组件UI
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

//导入底部导航栏Foot组件
import Foot from 'components/Foot.vue'

let app = new Vue({
  el: '#app',
  data: {
    lists: null,
    pageNum: 1,
    pageSize: 6,
    loading: false,
    allLoaded: false
  },
  //created可以拿到Vue的实例(this)
  created() {
    this.getLists()
  },
  methods: {
    getLists() {
      //loading:函数节流
      //allLoaded:判断所有数据是否加载完毕
      if(this.allLoaded) return
      this.loading = true
      axios.post(url.hotLists,{
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        let currentList = res.data.lists
        //判断所有数据是否加载完毕
        if(currentList.length < this.pageSize) {
          this.allLoaded = true
        }
        if(this.lists) {
          this.lists = this.lists.concat(currentList)
        }else {
          //第一次请求数据
          this.lists = currentList
        }
        this.loading = false
        this.pageNum++
      })
    }
  },
  components: {
    Foot
  }
})
