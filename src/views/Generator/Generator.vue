<template>
  <div>
    <h1>
      Generator函数
      <el-radio-group v-model="radio"
                      @change="handleChangRadio">
        <el-radio v-for="item in checkOptions"
                  :key="item.id"
                  :label="item.id">{{item.name}}</el-radio>
      </el-radio-group>
      <hr>
      <el-select v-model="selectVal"
                 style="width: 350px;"
                 placeholder="请选择">
        <el-option v-for="item in btnOptions"
                   :key="item.id"
                   :label="item.name"
                   :value="item.id">
        </el-option>
      </el-select>
      <el-button :disabled="!selectVal"
                 style="margin-left: 10px;"
                 type="primary"
                 @click="handleClick">{{btnName}}</el-button>
    </h1>
    <ul v-if="optList.length">
      <li v-for="(item, index) in optList"
          :key="index">{{item}}</li>
    </ul>
    <p>{{objVal}}</p>
  </div>
</template>
<script>
import { NEXT_OPTIONS, CHECK_OPTIONS, FOR_OPTIONS, THROW_OPTIONS, RETURN_OPTIONS,YIELD_OPTIONS, OTHER_OPTIONS } from "./options"
import { log } from 'util';
export default {
  data() {
    return {
      checkOptions: CHECK_OPTIONS,
      radio: "",
      hw: null,
      optList: [],
      fn2: null,
      objVal: "",
      selectVal: ""
    };
  },
  computed: {
    btnName: {
      get() {
        if (!this.selectVal) {
          return "暂时不可用"
        }
        let opt = this.btnOptions.find(option => option.id === this.selectVal)
        return opt && opt.name
      },
      set() {
        console.log("set了啊~~~")
      }
    },
    btnOptions() {
      let currentOptions = []
      switch (this.radio) {
        case "next":
          currentOptions = NEXT_OPTIONS
          break;
        case "forOf":
          currentOptions = FOR_OPTIONS
          break;
        case "throw":
          currentOptions = THROW_OPTIONS
          break;
        case "return":
          currentOptions = RETURN_OPTIONS
          break;
        case "yield":
          currentOptions = YIELD_OPTIONS
          break;
        case "other":
          currentOptions = OTHER_OPTIONS
          break;
      }
      return currentOptions
    }

  },
  methods: {
    handleChangRadio() {
      this.selectVal = ""
    },
    handleGenerator() {
      function* helloWorld() {
        yield "hello";
        yield "world";
        // return "ending"
      }
      this.hw = helloWorld();
    },
    generator2() {
      function* a() {
        console.log("执行了~");
      }
      let obj = a();
      setTimeout(() => {
        obj.next();
      }, 2000);
    },
    generator3() {
      let obj = {};
      obj[Symbol.iterator] = function* () {
        yield 1;
        yield 3;
        yield 4;
      };
      this.objVal = [...obj];

      function* gen() {
        console.log("111");
      }
      let g = gen();
      console.log(g);
      console.log(g[Symbol.iterator]() === g); // true
    },
    generator4() {
      let _this = this
      function* f() {
        for (var i = 1; true; i++) {
          _this.count = i
          console.log("before")
          var reset = yield i;
          console.log(reset)
          if (reset) { i = 0 }
        }
      }
      // 第一次进来的时候，先获取遍历器对象
      if (!this.g4) {
        this.g4 = f()
      }
      // 上一步不是7的倍数时,不干预；是7的倍数时，传true
      let valueObj = this.count % 7 ? this.g4.next(false) : this.g4.next(true)
      console.log(valueObj)
      // 打印的内容从 {value: 1, done: false} 到 {value: 7, done: false}
    },
    generator5() {
      function* foo(x) {
        var y = 2 * (yield (x + 1))
        var z = yield (y / 3)
        if (!(x + y + z)) {
          console.log(x, y, z)
          return x
        } else {
          console.log(x, y, z)
          return x + y + z
        }
      }
      if (!this.g5) {
        this.g5 = foo(5)
      }
      console.log(this.g5.next(6))
      /* 
      第1下： {value: 6, done: false} y = undefined
      第2下： {value: NaN, done: false} z = undefined
      第3下： {value: 5, done: true} 
      */
      /* 
     如果this.g5.next(3)
     第1下： {value：6, done: false} y = 6
     第2下： {value：2, done: false} z = 3
     第3下： {value: 14, done: true} 5+y+z=14
     */
      /* 
      如果是this.g5.next(6)
      value的值一次是： 6,4,23 y=12 z = 6
      */
    },
    generator6() {
      function* dataConsumer() {
        console.log('Started');
        console.log(`1. ${yield}`);
        console.log(`2. ${yield}`);
        return 'result';
      }
      // 第一次进来的时候，先获取遍历器对象
      if (!this.g6) {
        this.g6 = dataConsumer()
      }
      this.g6.next();
      // Started
      this.g6.next('a')
      // 1. a
      console.log(this.g6.next('b'))
      /* 打印generator函数中的console.log和generator函数的返回值
      2. b
      {value: "result", done: true} */
      console.log(this.g6.next('c'))
      // 每执行一次next，都会
    },
    generatorForOf1() {
      function* foo() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        return 6;
      }
      for (let v of foo()) {
        console.log(v)
      }
      /* 依次打印出 12345 */
    },
    generatorForOf2() {
      function* fibonacci() {
        let [prev, curr] = [0, 1]
        for (let i = 0; i < 100; i++) {
          yield curr;
          [prev, curr] = [curr, prev + curr];
        }
      }
      for (let n of fibonacci()) {
        if (n > 1000) {
          break;
        }
        console.log(n)
      }
    },
    generatorForOf3() {
      function* ObjectEntries(obj) {
        let propKeys = Reflect.ownKeys(obj)
        // Reflect.ownKeys(obj)和Object.keys(obj)等价
        for (let propKey of propKeys) {
          yield [propKey, obj[propKey]]
        }
      }
      let jane = { first: "chen", last: "ke" }
      for (let [key, value] of ObjectEntries(jane)) {
        console.log(`${key}: ${value}`)
      }
    },
    generatorForOf4() {
      function* objectEntries() {
        let propKeys = Object.keys(this);
        for (let pro of propKeys) {
          yield [pro, this[pro]];
        }
      }
      let jane = { first: "chen1", last: "ke1" }
      jane[Symbol.iterator] = objectEntries
      for (let [key, value] of jane) {
        console.log(`${key}: ${value}`)
      }
    },
    generatorForOf5() {
      function* numbers() {
        yield 1;
        yield 2;
        return 3
        yield 4;
      }
      console.log([...numbers()])
      console.log(Array.from(numbers()))
      let [x, y] = numbers()
      console.log(x, y);

      for (let n of numbers()) {
        console.log(n)
      }
    },
    throweg1() {
      let g = function* () {
        try {
          yield;
        } catch (e) {
          console.log("内部捕获", e)
        }
      }
      let i = g()
      i.next();
      i.throw(new Error("出错啦~~~"))
    },
    throweg2() {
      function* g() {
        yield 1;
        console.log('throwing an exception');
        throw new Error('generator broke!');
        // 错误没有被内部捕获，不会继续往下执行。因此第二次generator.next()时，返回的仍然是第一次的generator.next()结果。在调用一次next，就会
        console.log("我执行吗？？？？")
        yield 2;
        yield 3;
      }

      function log(generator) {
        var v;
        console.log('starting generator');
        try {
          v = generator.next();
          console.log('第一次运行next方法', v);
        } catch (err) {
          console.log('捕捉错误', v);
        }
        try {
          v = generator.next();
          console.log('第二次运行next方法', v);
        } catch (err) {
          console.log('捕捉错误', v);
        }
        try {
          v = generator.next();
          console.log('第三次运行next方法', v);
        } catch (err) {
          console.log('捕捉错误', v);
        }
        console.log('caller done');
      }

      log(g());
    },
    returneg1() {
      function* gen() {
        yield 1;
        yield 2;
        yield 3;
      }
      var g = gen();
      let arr = [g.next(), g.return('foo'), g.next()]        // { value: 1, done: false }
      // g.return('foo') // { value: "foo", done: true }
      // g.next()
      console.log(arr)
    },
    returneg2() {
      function* numbers(){
        yield 1;
        try{
          yield 2;
          yield 3;
        }finally{
          yield 4;
          yield 5;
        }
        yield 6;
      }
      let g = numbers();
      let arr = [g.next(), g.next(), g.next(), g.return(9), g.next(), g.next(), g.next()]
      console.log(arr)
    },
    yieldeg1(){
      function* foo(){
        yield "a";
        yield "b";
      }
      function* bar(){
        yield "x";
        yield* foo()
        yield "y"
      }
      for(let v of bar()){
        console.log(v)
      }
    },
    yieldeg2(){
      // 两个Generator函数A和B，A内部调用B，并且B中有return语句
      function* A(){
        yield "hello";
        let c = yield* B();
        console.log(c)
        yield "chenke!"

      }
      function* B(){
        yield "hao";
        yield "are";
        return "you"
      }
      let arr = [...A()]
      console.log(arr)
    },
    yieldeg3(){
      // yield 后面跟数组
      function* A(){
        yield* ["a","b","c"]
      }
      let i = 0
      let obj = A()
      while(i < 4){
        console.log(obj.next())
        i++
      }
      let read = (function* (){
        yield "hello";
        yield * "hello"
      })()
      let j = 0
      while(j < 4){
        console.log(read.next())
        j ++
      }
    },
    yieldeg4(){
      function* foo(){
        yield 2;
        yield 3;
        return "foo";
      }
      function* bar(){
        yield 1;
        var v = yield* foo();
        console.log(v);
        yield 4;
      }
      let i = 1;
      let it = bar()
      while(i < 7){
        console.log(`打印第${i}次`)
        console.log(it.next())
        i ++
      }

      function* gen(){
        yield "a";
        yield "b";
        return "result from gen"
      }

      function* log(obj){
        let result = yield* gen();
        console.log(result)
      }
      console.log([...log(gen())])
    },
    yieldeg5(){
      /* 
      数组含有Iterator接口，可以被yield*遍历
      */
      function* iterTree(data){
          if(!Array.isArray(data)){
              yield data
          }else{
            for(let i = 0; i < data.length; i ++){
                yield* iterTree(data[i])
            } 
          }    
      }
      const tree = ["a","b",[1,2,[3,4,[5]]]]
      console.log([...iterTree(tree)]) // ["a", "b", 1, 2, 3, 4, 5]
    },
    othereg1(){
      function* G(){
          
      }
      G.prototype.hello = function(){
          return "hi"
      }
      let g = G()
      console.log(g.hello())    
    },
    othereg2(){
      function* G(){
        let x = 1
        yield x = 2;
        yield this.c = 3;
      }
      let obj = {}
      let g = G.call(obj)
      // 用next遍历
      let i = 1
      while(i < 6){
        console.log( `当前是第${i}次`)
        console.log(g.next())
        i ++
      }
    },
    othereg3(){
      function* G(){
        this.a = 1;
        yield this.b = 2;
        yield this.c = 3;
      }
      // let f = G.call(G.prototype)
      function F(){
        return G.call(G.prototype)
      }
      let f = new F()
      console.log(f.next())
      console.log(f.next())
      console.log(f.next())
      console.log(f.a)
      console.log(f.b)
      console.log(f.c)
    },
    othereg4(){
      /* Generator函数中yield的值可以直接通过for...of遍历出来 */
      function* iteratorForObj(obj){
        let keys = Object.keys(obj)
        for(let i = 0; i < keys.length; i ++){
          yield [keys[i], obj[keys[i]]]
        }
      }
      let datas = {name: "chen", age: "30", height: "172cm"}
      for(let [key, value] of iteratorForObj(datas)){
        console.log(`key是${key},value是${value}`)
      }
    },
    handleClick() {
      if (!this.selectVal) {
        return
      }
      if (this.radio === "next") {
        this.clickNext()
      } else if (this.radio === "forOf") {
        this.clickForOf()
      } else{
        this.clickYield()
      }
    },
    clickNext() {
      switch (this.selectVal) {
        case "eg1":
          let obj = this.hw.next();
          this.optList.push(obj);
          break;
        case "eg2":
          this.generator2();
          break;
        case "eg3":
          this.generator3();
          break;
        case "eg4":
          this.generator4()
          break;
        case "eg5":
          this.generator5()
          break;
        case "eg6":
          this.generator6()
          break;
      }
    },
    clickForOf() {
      switch (this.selectVal) {
        case "eg1":
          this.generatorForOf1();
          break;
        case "eg2":
          this.generatorForOf2()
          break;
        case "eg3":
          this.generatorForOf3()
          break;
        case "eg4":
          this.generatorForOf4()
          break;
        case "eg5":
          this.generatorForOf5()
          break;
      }
    },
    clickYield() {
      let fnName = `${this.radio}${this.selectVal}`
      this[fnName]()
    }
  },
  created() {
    this.handleGenerator();
  }
};
</script>
<style lang="less" scoped>
</style>