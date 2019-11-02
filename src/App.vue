<template>
  <div id="app">
    <el-container>
      <el-header height="100px">
        <operate-header @changeRouter="handleChangeRouter"></operate-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import operateHeader from "./components/OperateHeader.vue"
export default {  
  name: 'app',
  data(){
    return {

    }
  },
  components: { operateHeader },
  methods: {
    handleChangeRouter(name){
      if(!name){
        this.$router.push({name: "empty"})
      }
      switch (name){
        case "slot":
          this.$router.push({name: "slotComponent"})
          break;
        case "iterator":
          console.log("haode")
          this.$router.push("/iterator")
          break;
        case "generator":
          this.$router.push({name: "generator"})
          break;
        case "eventemitter": 
          this.$router.push({name: "eventemitter"})
      }
    }
  }
}
</script>

<style lang="less">
#app{
  & > .el-container {
    height: 100%;
    & .el-header {
      background-color: #B3C0D1;
      color: #333;
    }
    & .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
    }
  }
}


</style>
