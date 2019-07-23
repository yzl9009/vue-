// 子组件 A.vue
<template>
  <div>
    {{name}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'this is zhangyj'
    }
  },
  methods: {
    sayHello () {
      console.log('hello father')
    }
  }
}
</script>
