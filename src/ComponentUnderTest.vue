<template>
  <div>
    <Init />
    <div v-if="flag" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Init from './Init'

export default {
  name: 'ComponentUnderTest',
  computed: {
    ...mapState(['flag'])
  },
  components: {
    Init
  }
}
</script>
