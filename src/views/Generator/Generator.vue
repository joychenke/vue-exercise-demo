<template>
  <div>
    <h1>Generator函数
      <el-button type="primary" plain @click="handleNext('eg1')">执行【指针对象】next方法</el-button>
      <el-button type="primary" plain
      @click="handleNext('eg2')">Generator函数中没用yield表达式</el-button>
      <el-button type="primary" plain @click="handleNext('eg3')">Generator函数赋值给symbol.iterator属性</el-button>
    </h1>
    <ul v-if="optList.length">
      <li v-for="(item, index) in optList" :key="index">{{item}}</li>
    </ul>
    <p>{{objVal}}</p>
  </div>  
</template>
<script>
export default {
  data(){
    return {
      hw: null,
      optList: [],
      fn2: null,
      objVal: ""
    }
  },
  methods: {
    handleGenerator(){
      function* helloWorld(){
        yield "hello"
        yield "world"
        // return "ending"
      }
      this.hw =  helloWorld()
    },
    generator2(){
      function* a(){
        console.log("执行了~")
      }
      let obj = a()
      setTimeout(() => {
        obj.next()
      }, 2000);
    },
    generator3(){
      let obj = {}
      obj[Symbol.iterator] = function* (){
        yield 1
        yield 3
        yield 4
      }
      this.objVal = [...obj] 
      function* gen(){
        console.log("111")
      }
      let g = gen()
      console.log(g)
      console.log(g[Symbol.iterator]() === g) // true
    },
    handleNext(type){
      switch(type){
        case "eg1":
          let obj = this.hw.next()      
          this.optList.push(obj)
          break;
        case "eg2":
          this.generator2()
          break;
        case "eg3":
          this.generator3()
          break;
      }
    }
  },
  created(){
    this.handleGenerator()
  }
}
</script>
<style lang="less" scoped>

</style>