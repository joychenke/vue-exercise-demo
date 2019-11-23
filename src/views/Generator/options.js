// next的options
export const NEXT_OPTIONS = [{
  id: "eg1",
  name: "执行【指针对象】next方法"
}, {
  id: "eg2",
  name: "Generator函数中没用yield表达式"
}, {
  id: "eg3",
  name: "Generator函数赋值给symbol.iterator属性"
}, {
  id: "eg4",
  name: "Generator函数的next传参-eg1"
}, {
  id: "eg5",
  name: "Generator函数的next传参-eg2"
}, {
  id: "eg6",
  name: "Generator函数的next传参-eg3"
}]

export const FOR_OPTIONS = [
  {id: "eg1", name: "自动遍历不调用next方法1"},
  {id: "eg2", name: "for of遍历斐波那切数列"},
  {id: "eg3", name: "Generator包装对象的for..of"},
  {id: "eg4", name: "将遍历器接口加到Symbol.iterator属性上"},
  {id: "eg5", name: "调用遍历器接口的地方"}
]

export const THROW_OPTIONS = [
  {id: "eg1", name: "Generator对象thorw方法-例子1"},
  {id: "eg2", name: "Generator对象thorw方法"},
]

export const RETURN_OPTIONS = [
  {id: "eg1", name: "遍历器对象的return方法1"},
  {id: "eg2", name: "遍历器对象的return方法2"},
]


export const YIELD_OPTIONS = [
  {id: "eg1", name: "yield* eg1"},
  {id: "eg2", name: "yield*后的遍历器对象是否会指向return"},
  {id: "eg3", name: "yield* 后跟数组"},
  {id: "eg4", name: "yield* 含有return时执行顺序"},
  {id: "eg5", name: "yield* 实现取二级数组的所有成员"}
  // yield 后面跟数组
]

export const OTHER_OPTIONS = [
  {id: "eg1", name: "generator中的this"},
  {id: "eg2", name: "generator实例获取正常的this"},
  {id: "eg3", name: "generator使用new的实现"},
  {id: "eg4", name: "在对象上部署Iterator接口的例子"},
]


export const CHECK_OPTIONS  = [
  {id: "next", name: "Generator对象的next方法"},
  {id: "forOf", name: "Generator对象的for...of循环"},
  {id: "throw", name: "throw方法例子"},
  {id: "return", name: "return方法例子"},
  {id: "yield", name: "yield* 的例子"},
  {id: "other", name: "yield其他例子"}
]