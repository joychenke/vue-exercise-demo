<template>
  <el-table :data="tableData"
            style="width: 100%">
    <el-table-column v-for="header in headers"
                     :key="header.id">
      <template slot="header"
                slot-scope="scope">
        <span @click="handleClick(scope)">{{ header.fieldName }}</span>
        <filter-popover :ref="header.fieldName"
                        :fieldName="header.fieldName"
                        :value="currentField"
                        @input="handleInput">
        </filter-popover>

      </template>
      <template slot-scope="scope">
        <p>{{ scope.row[header.fieldName] }}</p>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { data, headers } from "./tableData";
import filterPopover from "./filterPopover.vue";
export default {
  data() {
    return {
      tableData: data,
      headers: headers,
      currentField: "123"
    };
  },
  components: { filterPopover },
  methods: {
    handleInput(value) {
      console.log("父组件改变了value哦~~");
      this.currentField = value;
    },
    handleClick(scope) { }
  }
};
</script>
<style lang="less" scoped></style>
