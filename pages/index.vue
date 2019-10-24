<template>
  <div class="items">
    <!-- itemsをforでまわし、itemにそれぞれのデータが入ります。 -->
    <div v-for="item in items" :key="item" class="item-box">

      <div class="fresh">{{item.date| moment}} <a :href="item.url" target="_blank">{{ item.title }}</a></div>
    </div>
  </div>
</template>

<script>
// axiosの使用宣言
import axios from 'axios'
import moment from 'moment'

export default {
  filters: {
   moment: function (date) {
     return moment(date).format('YYYY.MM.DD');
      }
    },
  data () {
    return {
      // 取得したデータを入れる
      items: ''
    }
  },
  // API通信
  async asyncData () {
    const { data } = await axios.get('https://infosign.microcms.io/api/v1/fresh', {
      headers: { 'X-API-KEY': '20d4758a-5a3d-48ec-a014-d2e9990e004e' }
    })
    return {
      items: data.contents
    }
  }
  
}
</script>

<style>
</style>