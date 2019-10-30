<template>
  <div class="">
    <div @click="da">
      <input type="text">
      电风扇快递费
    </div>
      <button @click="da">动态路由test</button>
      <button @click="da1">动态路由test1</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},
  data() {
    return {
    }
  },
  methods: {
    da() {
      this.$router.push({
        path: '/test/5666',
      })
    },
    da1() {
      this.$router.push({
        path: '/test/777',
      })
    }
  }
}
</script>

<style>
</style>
