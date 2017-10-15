import { GalacticAge } from './../js/galactic-age.js';

describe('GalacticAge', function() {
  
  let reusableDate,
      today,
      testDate;

  beforeEach(() => {
    today = moment().toDate();
    jasmine.clock().mockDate(today);
    reusableDate = new GalacticAge("1995-10-14");
  });

  it('should return your current age in Mercury', () =>{
    expect(91).toEqual(reusableDate.mercuryAge());
  });

});