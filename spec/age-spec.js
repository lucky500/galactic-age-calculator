import { Age } from './../src/js/age.js';

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
    expect(819878400).toEqual(reusableDate.getPersonAgeInSeconds());
  });

  it('should return the difference between today', () => {
    reusableDate = new Age('1984-10-20', '2016-10-15');
    expect(1009411200).toEqual(reusableDate.getSecondsBetweenTwoDates());
  });

  describe('life expectancy', () => {
    it('should return person\'s life expectancy for white male activity level 6', () => {
      reusableDate = new Age('1984-10-20', '2016-10-15', '5', '2', '6');
      console.log(reusableDate);
      expect(81.71).toEqual(reusableDate.lifeExpectancy());
      console.log(reusableDate.lifeExpectancy());
    });

    it('should return person\'s life expectancy for asian female activity level 2', () => {
      reusableDate = new Age('1984-10-20', '2016-10-15', '10', '4', '2');
      console.log(reusableDate);
      expect(90.89).toEqual(reusableDate.lifeExpectancy());
      console.log(reusableDate.lifeExpectancy());
    });

    it('should return person\'s life expectancy for black male activity level 7', () => {
      reusableDate = new Age('1984-10-20', '2016-10-15', '5', '3', '7');
      console.log(reusableDate);
      expect(82.29).toEqual(reusableDate.lifeExpectancy());
      console.log(reusableDate.lifeExpectancy());
    });

  });

});
