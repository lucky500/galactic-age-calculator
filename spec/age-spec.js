import { Age } from './../js/age.js';

describe('Age', function() {
  
  //let reusableDate;
  //     today,
  //     testDate = '2016-10-05',
  //     date = '2016-10-10';

  // beforeEach(() => {
  //   reusableDate = new Age('1984-10-20', '2017-10-15');
  //   console.log(reusableDate);
  //   const mockedDateAndTime  = '2017-03-02 00:00:00';
  //   today = moment(mockedDateAndTime).toDate();
  //   console.log('this is today', today);
  //   jasmine.clock().mockDate(today);
  // });

  // it('should return the difference between today', () => {
  //   console.log(date);
  //   console.log(testDate);
  //   console.log(reusableDate.getSecondsBetweenTwoDates(date, testDate));
  //   console.log(typeof(reusableDate.getSecondsBetweenTwoDates));
  //   //expect(5).toEqual(reusableDate.getSecondsBetweenTwoDates());
  // });



  describe('testing dates in js', function () {

    it('should return the difference between today', () => {
      var reusableDate = new Age('1984-10-20', '2016-10-15');
      console.log(reusableDate);
      var tempDate = reusableDate.getSecondsBetweenTwoDates();
      console.log('tempDate:', tempDate);
      console.log(reusableDate);
      //expect(4).toEqual(reusableDate.getDaysBetweenTodayAndADate(date));
    });

  });
});

