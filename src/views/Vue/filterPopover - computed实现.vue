<template>
  <el-popover placement="bottom" title="标题" width="200" trigger="manual" :value="visible">
    <i class="el-icon-edit" slot="reference" @click="handleClick" style="cursor: pointer;"></i>
    <div style="height: 100px; width: 100px;">
      <div>我是内容啊</div>
      <el-button @click="handleFilter">筛选</el-button>
      <el-button @click="handleReset">重置</el-button>
    </div>
  </el-popover>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    visible: {
      get() {
        if (this.value === this.fieldName) {
          console.log(this.fieldName);
        } else {
          console.log("false了哦：", this.fieldName);
        }
        return this.value === this.fieldName;
      },
      // set只对手动时生效
      set(value) {
        console.log("set生效了哦~~");
        this.$emit("input", value ? this.fieldName : "");
      }
    }
  },
  props: {
    fieldName: { type: String, required: true },
    value: { type: String, required: true }
  },
  methods: {
    handleClick() {
      console.log("点击了哦~~~~");
      this.visible = !this.visible;
    },
    handleFilter() {
      console.log("过滤了哦~~~~");
      this.visible = false;
    },
    handleReset() {
      console.log("重置了哦~~~~");
      this.visible = false;
    }
  }
};
</script>
<style lang="less" scoped>
.el-popover__reference {
  cursor: pointer;
}
</style>
