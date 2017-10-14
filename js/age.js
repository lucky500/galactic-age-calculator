var moment = require('moment');

export class Age {
  
  constructor(age, secondDate) {
    this.age = age;
    this.secondDate = secondDate;
    // this.date = date;
    // this.today = today;
  }

  getSecondsBetweenTwoDates(age, secondDate){
    age = moment(this.age);
    secondDate = moment(this.secondDate);

    return  secondDate.diff(age, 'years');

  //   differenceInDays = age.diff(secondDate, 'days');
  //   //let differenceInDays = this.age - this.secondDate
  //   return differenceInDays;

  }

  // getDaysBetweenTodayAndADate(date, today) {
  //   today = moment(this.today);
  //   date = moment(this.date);
  //   return date.diff(today, 'seconds'); 
  // }
}
