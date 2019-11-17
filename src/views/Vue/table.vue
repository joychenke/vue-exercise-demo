<template>
  <el-table :data="tableData" ref="table"
            style="width: 100%" @select="handleSelect" @selection-change="handleSelChange">
    <el-table-column type="selection" width="60"></el-table-column>
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
    <template v-slot:append>
      <p>{{debounceFnDetail}}</p>
      <el-button @click="selectRow">选择第二行</el-button>
    </template>
  </el-table>
</template>
<script>
import { data, headers } from "./tableData";
import filterPopover from "./filterPopover.vue";
import { debounce } from "debounce"
export default {
  data() {
    return {
      tableData: data,
      headers: headers,
      currentField: "123",
      debounceFnDetail: ""
    };
  },
  components: { filterPopover },
  methods: {
    handleInput(value) {
      console.log("父组件改变了value哦~~");
      this.currentField = value;
    },
    handleClick(scope) {
      console.log(scope)
      /* window.onresize = () => {
        console.log(window.innerWidth)
      } */
      let debounceFn = debounce(() => {
        console.log(window.innerWidth)
      }, 1000, true)
      this.debounceFnDetail = debounceFn
      window.onresize = debounceFn
    },
    handleSelect(val, row){
      console.log(val)
      console.log(row)
    },
    handleSelChange(val){
      console.log(val)
    },
    selectRow(){
      let row = this.tableData[1]
      this.$refs["table"].toggleRowSelection(row, true)
    }
  }
};
</script>
<style lang="less" scoped></style>
