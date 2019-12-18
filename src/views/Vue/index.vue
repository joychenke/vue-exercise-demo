<template>
  <div>
    Vue 模块
    <el-input v-model="fieldValue"></el-input>
    <h1>===================父子模块分割线================</h1>
    <computed-com :value="fieldValue" class="div-wrapper" stripe
                  @changeVal="handleChangeVal"></computed-com>
    <h1>===================table popover分割线================</h1>
    <table-com :border="false"></table-com>
  </div>
</template>
<script>
import computedCom from "./computedCom.vue";
import tableCom from "./table.vue";
export default {
  data () {
    return {
      fieldValue: "",
      border: false
    };
  },
  components: { computedCom, tableCom },
  methods: {
    handleChangeVal (value) {
      console.log("父组件中，改变value");
      this.fieldValue = `${value},append`;
    }
  }
};
</script>
