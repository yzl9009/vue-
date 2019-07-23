// 子组件 article.vue
<template>
  <div>
    <span v-for="(item, index) in articles" :key="index" @click="getIndex(index)">{{item}}</span>
  </div>
</template>

<script>
export default {
  props: ['articles'],
  methods: {
    getIndex (index) {
      this.$emit('getIndex', index)
    }
  }
}
</script>
