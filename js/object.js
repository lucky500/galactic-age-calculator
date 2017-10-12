export class Obj {
  constructor(number) {
    number = parseInt(number);
    this.number = number;
  }

  func() {
    return this.number += 1;
  }

}
