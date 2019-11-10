<template>
  <div>
    <p v-for="item in optionList" :key="item">{{ item }}</p>
    <el-button @click="handleClick">改变optionList的值</el-button>
    <div>{{ showTime }}</div>
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
        console.log("运行computed的get");
        if (!this.value) {
          return [];
        }
        return this.value.split(",");
      },
      set: function(value) {
        console.log("运行computed的set");
        this.$emit("changeVal", value.join(","));
      }
    }
  },
  props: {
    value: { type: String, required: true }
  },
  methods: {
    handleClick() {
      console.log("手动修改了计算属性的值");
      this.optionList = this.getRandomList();
    },
    getRandomList() {
      let num = parseInt(Math.random() * 10000);
      let arr = String(num).split("");
      return Array.from(new Set(arr));
    }
  }
};
</script>
