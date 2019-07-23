// section父组件
<template>
  <div class="section">
    子:<com-article :articles="articleList" @getIndex="getIndex"></com-article>
    父:<span>index: {{currentIndex}}</span>
  </div>
</template>

<script>
import comArticle from './article.vue'
export default {
  name: 'section1',
  components: { comArticle },
  data () {
    return {
      currentIndex: -1,
      articleList: ['红楼梦', '西游记', '三国演义']
    }
  },
  methods: {
    getIndex (index) {
      this.currentIndex = index
    }
  }
}
</script>
