<template>
  <el-popover placement="bottom" title="标题" width="200" trigger="manual" v-model="visible">
    <i class="el-icon-edit" slot="reference" @click.stop="handleClick" style="cursor: pointer;"></i>
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
    return {
      visible: false
    };
  },
  watch: {
    value: {
      handler: function(val) {
        this.visible = val === this.fieldName;
      },
      immediate: true
    }
  },
  props: {
    fieldName: { type: String, required: true },
    value: { type: String, required: true }
  },
  methods: {
    handleClick() {
      this.$emit("input", this.visible ? "" : this.fieldName);
    },
    handleFilter() {
      this.$emit("input", "");
    },
    handleReset() {
      this.$emit("input", "");
    }
  }
};
</script>
<style lang="less" scoped>
.el-popover__reference {
  cursor: pointer;
}
</style>
