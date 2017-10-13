import { moment } from 'moment';

export class Age {
  
  constructor(age, secondDate) {
    this.age = age;
    this.secondDate = secondDate
  }

  getSecondsBetweenTwoDates(){
    differenceInSeconds = moment(this.secondDate).diff(this.age, 'seconds');
    return differenceInSeconds;
  }
}
