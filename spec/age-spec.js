import { Age } from './../js/age.js';

describe('Age', function() {
  
  let reusableDate,
      today,
      xmas;

  beforeEach(() => {
    reusableDate = new Age();
    today = moment().toDate();
    xmas = moment('1995-12-25')
    jasmine.clock().mockDate(today);
  });

  it('should return a date in seconds', () =>{
    reusableDate = new Age(xmas);
    console.log(reusableDate)
    console.log(today)
    expect(819878400).toEqual(reusableDate.getPersonAgeInSeconds());
  });

  it('should return the difference between today', () => {
    reusableDate = new Age('1984-10-20', '2016-10-15');
    expect(1009411200).toEqual(reusableDate.getSecondsBetweenTwoDates());
  });

});

