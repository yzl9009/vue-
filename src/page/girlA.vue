// childCom1.vue

<template class="border">
  <div>
    <p>name: {{ name}}</p>
    <p>girlA的$attrs: {{ $attrs }}</p>
    <child-com2 v-bind="$attrs"  v-on="$listeners"></child-com2>
  </div>
</template>
<script>
import childCom2 from './girlB.vue'
export default {
  components: {
    childCom2
  },
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
  props: {
    name: String // name作为props属性绑定
  },
  created () {
    console.log(this.$attrs)
    console.log(this.$listeners.update())
    // { "age": "18", "gender": "女", "height": "158", "title": "程序员成长指北" }
  }
}
</script>
