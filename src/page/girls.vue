<template>
  <div>
    <child-com1
      :name="name"
      :age="18"
      :gender="gender"
      :height="158"
      title="程序员"
      @change="change"
      @update="update"
    ></child-com1>
  </div>
</template>
<script>
import childCom1 from './girlA.vue'
export default {
  components: { childCom1 },
  data () {
    return {
      name: 'aa',
      age: 18,
      gender: '女',
      height: '158'
    }
  },
  methods: {
    change () {
      console.log('唱歌')
    },
    update () {
      console.log('U盘达特')
    }
  }
}
</script>
