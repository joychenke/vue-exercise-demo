<template>
  <div>
    <el-switch
      style="display: block"
      v-model="value"
      active-text="我是字符"
      inactive-text="我是数字"
    ></el-switch>
    <el-button type="primary" @click="handleClick"
      >清除eventemitter事件</el-button
    >
    <basic-text />
  </div>
</template>
<script>
import basicText from "./BasicText.vue";
import EventManager from "@/utils/event_manager.js";
import eventConfig from "@/utils/event_config.js";
export default {
  data() {
    return {
      value: false,
      evtManagerInst: null
    };
  },
  components: { basicText },
  methods: {
    handleClick() {
      this.evtManagerInst.removeListeners();
    },
    registerEvt() {
      this.evtManagerInst.addListener(eventConfig.config.CHECK_CHANGES, obj => {
        console.log("触发第一个事件！", obj);
        this.value = Object.is(NaN, parseInt(obj.value));
        obj.type = this.value ? "success" : "warning";
        obj.msg = this.value ? "字符" : "数字";
      });
      // 注册另一个事件
      this.evtManagerInst.addListener(eventConfig.config.CHECK_CHANGES, obj => {
        console.log("第二个事件也触发了！", obj);
      });
    }
  },
  mounted() {
    this.evtManagerInst = new EventManager(eventConfig.emitter);
    this.registerEvt();
  },
  /*   beforeRouteLeave(to, from, next){
    this.evtManagerInst.removeListeners()
    next()
  } */
  beforeDestroy() {
    this.evtManagerInst.removeListeners();
  }
};
</script>
