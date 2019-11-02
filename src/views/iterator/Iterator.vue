<template>
  <div>
    iterator接口
  </div>
</template>
<script>
export default {
  data(){
    return {
      arr: [4,5,6,3,2,1]
    }
  },
  methods: {
    calcIterator(){
      let iterator = this.arr[Symbol.iterator]()
      // iterator是一个遍历器对象，有next方法
      let result = iterator.next()
      console.log(result)
      while(!result.done){
        let x = result.value
        result = iterator.next()
        console.log(result)
      }
    },    
    // for...of循环遍历数组
    forOfEg(){
      let arr = [3,1,7,2,9,8]
      // 只输出arr中为偶数的项
      //this.arrforEach(arr);
      this.arrforIn(arr)  
      // this.arrForOf(arr) 
    },
    arrforEach(arr){
      arr.forEach(item => {
        console.log("当前输出的是：  ", item)
        if(item % 2){ return }
        console.log(item)
      })
    },
    arrforIn(arr){
      for(let i in arr){
        if(!(arr[i] % 7)){
          return
        }
        console.log(arr[i])
      }
    },
    arrForOf(arr){
      for(let i of arr){
        if(!(i % 7)){
          continue
        }
        console.log(i)
      }
    }
  },
  created(){
    console.log("created")
    // this.calcIterator()
    // this.arrForOf()
    this.forOfEg()
  }
}
</script>
<style lang="less" scoped>

</style>