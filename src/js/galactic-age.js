import { Age } from './../js/age.js';
import moment from 'moment';


export class GalacticAge extends Age {

  constructor(age){
    super(age);

  }

  mercuryAge(age){
    let currentAge = moment().diff(this.age, 'years', false);
    let currentMercuryAge = Math.floor((currentAge * 365) / 88);
    return currentMercuryAge;
  }

  venusAge(age){
    let currentAge = moment().diff(this.age, 'years', false);
    let currentVenusAge = Math.floor((currentAge * 365) / 225);
    return currentVenusAge;
  }

  marsAge(age){
    let currentAge = moment().diff(this.age, 'years', false);
    let currentMarsAge = Math.ceil((currentAge * 365) / 685);
    return currentMarsAge;
  }

  jupiterAge(age){
    let currentAge = moment().diff(this.age, 'years', false);
    let currentJupiterAge = Math.ceil((currentAge * 365) / (11.8 * 365));
    return currentJupiterAge;
  }
}
