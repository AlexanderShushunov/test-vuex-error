<template>
  <div />
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Init',
  methods: {
    ...mapMutations(['setFlag'])
  },
  created () {
    this.setFlag(false)
  }
}
</script>
