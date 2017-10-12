import { Obj } from './../js/object.js';

describe('function', function () {
  it('should return 2', function () {
    let object = new Obj(1);
    expect(object.func()).toEqual(2);
  });
});
