export default class {
  constructor(evtInst){
    this.evtInst = evtInst
    this.listeners = {}
  }
  addListener(evtName, callback){
    this.evtInst.on(evtName, callback)
    if(!this.listeners[evtName]){
      this.listeners[evtName] = []
    }
    this.listeners[evtName].push(callback)
  }
  removeListeners(){
    Object.keys(this.listeners).forEach(evtName => {
      console.log(this.listeners[evtName])
      this.listeners[evtName].forEach((callback, index) => {
        this.evtInst.off(evtName,callback)
      })
    })
    
  }
}