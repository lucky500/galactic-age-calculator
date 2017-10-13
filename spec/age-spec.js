import { Age } from './../js/age.js';

describe('Age', function() {
  let reusableDate;

  beforeEach(function(){
    reusableDate = new Age("5");
  });

  it('sets the age to the inputted date given', function() {
    expect(reusableDate.age).toEqual("5");
  });

});
