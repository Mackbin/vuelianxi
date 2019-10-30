<template>
   <div class="favorite-list" :style="{'width':this.$store.state.width_s+'px'}">
       test.vue {{$route.params.testId}}
       {{this.$store.state.width_s}}
   </div>
</template>

<script>
export default {
   name: 'test',
  components: {},
   data() {
       return {}
   },
  methods: {}
}
</script>

<style scoped lang="less">
</style>
