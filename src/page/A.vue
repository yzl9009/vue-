<template>
  <div>
	<bb></bb>
  </div>
</template>

<script>
import bb from './B.vue'
export default {
  name: 'A',
  data () {
    return {
      nameA: ''
    }
  },
  provide: {
    for: 'listen to father'
  },
  components: {
    bb
  }
}
</script>
