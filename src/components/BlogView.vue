<template>
  <div v-html="content">
  </div>
</template>

<script>
import marked from 'marked'

export default {
  data() {
    return {
      content: marked('# Marked in browser\n\nRendered by **marked**.')
    }
  }
}
</script>

<style scoped>
</style>