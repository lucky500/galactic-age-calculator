import { Age } from './../js/age.js';
import moment from 'moment';

export class GalacticAge extends Age {

  constructor(age){
    super(age);
  }

  mercuryAge(age){
    const birthDay = moment(this.age);
    const currentAge = moment().diff(birthDay, 'years', false);
    return currentAge;
  }
}