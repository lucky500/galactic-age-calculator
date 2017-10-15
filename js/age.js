import moment from 'moment';

export class Age {
  
  constructor(age, secondDate, gender, race, activity) {
    this.age = age;
    this.secondDate = secondDate;
    this.gender = gender;
    this.race = race;
    this.activity = activity;
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

  lifeExpectancy(gender, race, activity){
    const lifeExpectancyMath = Number(this.gender) + Number(this.race);
    const activityLevel = Number(this.activity);

    console.log('inside app.js"', lifeExpectancyMath);
    let result = 0; 
    const hispanicMale    = 80.16;
    const hispanicFemale  = 85.44;
    const whiteMale       = 76.71;
    const whiteFemale     = 81.48;
    const blackMale       = 72.29;
    const blackFemale     = 78.46;
    const asianMale       = 84.13;
    const asianFemale     = 88.89;

    if(activityLevel === 0){
      result = result + 0;
    } else if (activityLevel > 0 && activityLevel <= 3) {
      result = result + 2;
    } else if (activityLevel > 3 && activityLevel <= 6) {
      result = result + 5;
    } else {
      result  = result + 10;
    }

    switch (true) {
      case (lifeExpectancyMath === 6):
        result = result + hispanicMale;
        break;
      case (lifeExpectancyMath === 11):
        result = result + hispanicFemale;
        break;
      case (lifeExpectancyMath === 7):
        result = result + whiteMale;
        break;
      case (lifeExpectancyMath === 12):
        result = result + whiteFemale;
        break;
      case (lifeExpectancyMath === 8):
        result = result + blackMale;
        break;
      case (lifeExpectancyMath === 13):
        result = result + blackFemale;
        break;
      case (lifeExpectancyMath === 9):
        result = result + asianMale;
        break;
      case (lifeExpectancyMath === 14):
        result = result + asianFemale;
        break;
      default:
        console.log('sorry please enter valid information');
    }

    return result;
  }
  
}
