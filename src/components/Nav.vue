<template>
    <div>
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
       
          <el-menu-item index="1-1">
            <router-link to='/e'>去E页面</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
             <router-link to='/c'>去C页面</router-link>

          </el-menu-item>
          <el-menu-item index="1-1">
            <router-link to='/g'>去G页面</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
             <router-link to='/c'>去C页面</router-link>

          </el-menu-item>
       
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
       
          <el-menu-item index="1-1">
            <router-link to='/e'>去E页面</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
             <router-link to='/c'>去C页面</router-link>

          </el-menu-item>
          <el-menu-item index="1-1">
            <router-link to='/d'>去D页面</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
             <router-link to='/c'>去C页面</router-link>

          </el-menu-item>
       
      </el-submenu>

         
        
     
    </el-menu>
        
    </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
