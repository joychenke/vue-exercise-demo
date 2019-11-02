var EventEmitter2 = require('eventemitter2').EventEmitter2;
// 定义eventemitter2实例和事件名
const eventConfig = {}

eventConfig.emitter = new EventEmitter2()

eventConfig.config = {
  "CHECK_CHANGES": "checkChanges"
}
export default eventConfig