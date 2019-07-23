// childCom2.vue

<template>
  <div class="border">
    <p>age: {{ age}}</p>
    <p>girlB: {{ $attrs }}</p>
  </div>
</template>
<script>

export default {
  inheritAttrs: false,
  props: {
    age: Number
  },
  created () {
    console.log(this.$attrs)
    console.log(this.$listeners.update())
    // { "gender": "女", "height": "158", "title": "程序员" }
  }
}
</script>
