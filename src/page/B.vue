// B.vue

<template>
  <div>
    B:{{demo}}
    <com-c></com-c>
  </div>
</template>

<script>
import comC from './C.vue'
export default {
  name: 'B',
  inject: ['for'],
  provide: {
    option: 'carefully'
  },
  data () {
    return {
      demo: this.for
    }
  },
  components: {
    comC
  }
}
</script>
