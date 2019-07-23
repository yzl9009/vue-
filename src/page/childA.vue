// 子组件中
<template>
  <div class="com_a">
    <span>子A: {{messageA}}</span>
    <p>获取父组件的值为:  {{parentVal}}</p>
    <button @click="change">爱的昵称</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messageA: 'who am i'
    }
  },
  computed: {
    parentVal () {
      return this.$parent.msg
    }
  },
  methods: {
    change () {
      this.eventbus.$emit('nickname', {name: 'littleblack'})
    }
  }
}
</script>
