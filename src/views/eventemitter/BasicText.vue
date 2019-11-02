<template>
  <div>
    <el-select v-model="value" @change="handleChange">
      <el-option v-for="item in optList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import eventConfig from "@/utils/event_config"
export default {
  data(){
    return {
      value: "",
      optList: ["c",1,3,"a","b",4]
    }
  },
  methods: {
    handleChange(val){
      console.log("emit，准备触发事件！")
      // 传给接收事件组件的参数
      let obj = {value: val, type: "", msg: ""}
      // 触发事件
      eventConfig.emitter.emit(eventConfig.config.CHECK_CHANGES, obj)
      // 事件触发后的处理
      this.$message({type: obj.type, message: obj.msg})
    }
  }
}
</script>