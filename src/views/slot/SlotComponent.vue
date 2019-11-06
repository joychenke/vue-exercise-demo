<template>
  <div>
    <el-radio-group v-model="radio">
      <el-radio label="one">slot one</el-radio>
      <el-radio label="two">slot two</el-radio>
      <el-radio label="three">slot three</el-radio>
    </el-radio-group>
    <base-component>
    我也是传给默认插槽的内容 
            
    </base-component>
  </div>  
</template>
<script>
import baseComponent from "./Base.vue"
export default {
  data(){
    return {
      radio: "two"
    }
  },
  components: { baseComponent }
}
</script>