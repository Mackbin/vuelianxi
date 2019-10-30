<template>
  <div id="app">
    <el-container>
      <el-header>
        <menuheader></menuheader>
      </el-header>
      <el-container>
        <el-aside width="200px">
           <menusilder></menusilder>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import menuheader from './components/menu_header.vue'
import menusilder from './components/menu_silder.vue'

export default {
  name: 'app',
  data() {
    return {
      transitionName:''
    }
  },
  components: { menuheader, menusilder },
}
</script>

<style>
 @import '~@/assets/style_public.css';
</style>
