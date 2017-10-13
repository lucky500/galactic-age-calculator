import { moment } from 'moment';

export class Age {
  
  constructor(age) {
    this.age = age;
  }

  getDaysBetweenTodayAndADate(){
    let today = moment();

    return date.diff(today, days);
  }
}
