// 子组件中
<template>
  <div class="com_b">
    <span>子B: {{messageA}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messageA: 'who am i'
    }
  },
  mounted () {
    this.eventbus.$on('nickname', param => {
      this.messageA = param.name
    })
  }
}
</script>
