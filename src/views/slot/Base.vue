<template>
  <div>
    <h1>第一个插槽</h1>
    <slot name="one" addr="address" >slot one 默认的内容</slot>
    <h1>第二个插槽</h1>
    <slot :age="loginUsr.age" city="wuhan">slot two 默认的内容</slot>    
    <h1>第三个插槽</h1>
    <slot name="three" :userName="loginUsr.name" :year="year">slot three 默认的内容</slot>
  </div>
</template>
<script>
export default {
  data(){
    return {
      loginUsr: {
        name: "chenke",
        age: 30
      },
      year: 2019
    }
  },
  methods: {

  }
}
</script>