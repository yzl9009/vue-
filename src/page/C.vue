// C.vue
<template>
  <div>
    C:{{demo}}
  </div>
</template>

<script>
export default {
  name: 'C',
  inject: ['for', 'option'],
  data () {
    return {
      demo: this.for + ' ' + this.option
    }
  }
}
</script>
