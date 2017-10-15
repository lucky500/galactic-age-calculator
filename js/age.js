import moment from 'moment';

export class Age {
  
  constructor(age, secondDate, gender, race) {
    this.age = age;
    this.secondDate = secondDate;
    this.gender = gender;
    this.race = race;
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

  lifeExpectancy(gender, race){
    var result = Number(this.gender) + Number(this.race);
    switch (true) {
      case (result === 6):
        console.log(80.16);
        break;
      case (result === 11):
        console.log(85.44);
        break;
      default:
        console.log('sorry please enter valid information');
    }
  }
  
}
