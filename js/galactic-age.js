import { Age } from './../js/age.js';
import moment from 'moment';

export class GalacticAge extends Age {

  constructor(age){
    super(age);
  }

  mercuryAge(age){
    const birthDay = moment(this.age);
    let currentAge = moment().diff(birthDay, 'years', false);
    let currentMercuryAge = Math.floor((currentAge * 365) / 88);
    return currentMercuryAge;
  }
}