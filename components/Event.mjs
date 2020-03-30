const FakeEvent = class {
  constructor(type="event"){
    this._type = type
  }
  get type(){
    return this._type
  } 
}
export default Event || FakeEvent