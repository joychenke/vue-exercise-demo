<template>
  <div>
    <div>
      <el-radio-group v-model="radio" @change="handleChange">
        <el-radio label="es6">ES6</el-radio>
        <el-radio label="vue">Vue</el-radio>
        <el-radio label="emitter">eventemitter2</el-radio>
      </el-radio-group>
    </div>
    <el-button-group v-if="radio === 'es6'">
      <el-button type="primary" @click="handleClick('iterator')">iterator</el-button>
      <el-button type="primary" @click="handleClick('generator')">Generator</el-button>
    </el-button-group>
    <el-button-group v-else-if="radio === 'vue'">
      <el-button type="primary" @click="handleClick('vue')">Vue相关组件</el-button>
    </el-button-group>
    <el-button-group v-else-if="radio === 'emitter'">
      <el-button type="primary" @click="handleClick('eventemitter')">evemtemitter2</el-button>
    </el-button-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "es6"
    };
  },
  methods: {
    handleChange() {
      this.$emit("changeRouter", "");
    },
    handleClick(type) {
      this.$emit("changeRouter", type);
    }
  }
};
</script>
<style lang="less" scoped>
.el-button-group {
  display: block;
  margin-top: 20px;
}
</style>
