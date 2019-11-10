const datas = [{
  date: '2016-05-02',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1518 弄'
}, {
  date: '2016-05-04',
  name: '陈小可',
  address: '武汉市洪山区软件园路'
}, {
  date: '2016-05-01',
  name: '李晓丽',
  address: '湖南省郴州市'
}, {
  date: '2016-05-03',
  name: '沈小乐',
  address: '上海市浦东新区'
}]

const headers = [{
  fieldName: "date",
  id: "0",
  type: "text"
}, {
  fieldName: "name",
  id: "1",
  type: "select"
}, {
  fieldName: "address",
  id: "2",
  type: "text"
}]

export {
  datas as data, headers
}