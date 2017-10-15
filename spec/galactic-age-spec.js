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

  it('should return your current age in Mercury', () => {
    expect(91).toEqual(reusableDate.mercuryAge());
  });

  it('should return your current age in Venus', () => {
    expect(35).toEqual(reusableDate.venusAge());
  });

  it('should return your current age in Mars', () => {
    expect(12).toEqual(reusableDate.MarsAge());
  });

  it('should return your current age in Jupiter', () => {
    expect(2).toEqual(reusableDate.JupiterAge());
  });

});