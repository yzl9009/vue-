// 父组件中
<template>
  <div class="hello_world">
    <div>父: {{msg}}</div>
    <com-a></com-a>
    <com-b></com-b>
    <button @click="changeA">点击改变子组件值</button>
  </div>
</template>

<script>
import ComA from './childA.vue'
import ComB from './childB.vue'
export default {
  name: 'father',
  components: { ComA, ComB },
  data () {
    return {
      msg: 'i am yzl , what is your name'
    }
  },

  methods: {
    changeA () {
      // 获取到子组件A
      this.$children[0].messageA = 'this is zhaoxj'
      // 获取到子组件B
      this.$children[1].messageA = 'this is zhousj'
    }
  },
  mounted () {
    this.eventbus.$on('nickname', param => {
      this.msg = param.name
    })
  }
}
</script>
