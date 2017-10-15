import moment from 'moment';

export class Age {
  
  constructor(age, secondDate) {
    this.age = age;
    this.secondDate = secondDate;
  }

  getPersonAgeInSeconds(age){
    let ageInSeconds = new Date(this.age);
    ageInSeconds = ageInSeconds.getTime() / 1000;
    return ageInSeconds;
  }

  getSecondsBetweenTwoDates(age, secondDate){
    let secondsAge = moment(this.age);
    let secondsSecondDate = moment(this.secondDate);
    return  secondsSecondDate.diff(secondsAge, 'seconds');
  }
  
}
