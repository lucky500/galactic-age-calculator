import { Age } from './../js/age.js';

describe('Age', function() {
  
  let reusableDate;

  beforeEach(() => {
    reusableDate = new Date('2016-01-05');
    console.log(reusableDate);
    const mockedDateAndTime  = '2017-03-02 00:00:00';
    const today = moment(mockedDateAndTime).toDate();
    console.log(today);
    jasmine.clock().mockDate(today);
  });

  it('should return the difference between today', () => {
    let date = moment('2016-01-05').format('l');
    console.log(reusableDate.getSecondsBetweenTwoDates);
    console.log(date);
    //expect(4).toEqual(reusableDate.getSecondsBetweenTwoDates(date));
  });


});

