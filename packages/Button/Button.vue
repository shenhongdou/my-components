
<template>
  <button class="shd-btn" @click="count ++">{{count}}</button>
</template>

<script>
export default {
  name: 'MyButton',
  data () {
    return {
      count: 1
    }
  },
}
</script>