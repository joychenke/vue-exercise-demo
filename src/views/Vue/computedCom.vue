<template>
  <div>
    <p v-for="item in optionList" :key="item">{{item}}</p>
    <el-button @click="handleClick">改变optionList的值</el-button>
    <div>{{showTime}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showTime: ""
    };
  },
  computed: {
    optionList: {
      get: function() {
        console.log("5678");
        if (!this.value) {
          return [];
        }
        return this.value.split(",");
      },
      set: function(value) {
        console.log("3456");
        this.$emit("input", value.join("-"));
      }
    }
  },
  props: {
    value: { type: String, required: true }
  },
  methods: {
    handleClick() {
      console.log("1234");
      this.optionList = [1, 2, 3];
    }
  }
};
</script>