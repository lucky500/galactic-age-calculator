import { Age } from './../js/age.js';
import { GalacticAge } from './../js/galactic-age.js';

$(document).ready(function () {
  $('select').material_select();

  $('.btn').click(function (e) {
    e.preventDefault();
    let birthDate = $('#birth-date').val();
    let secondDate = $('#second-date').val();
    let race = $('select[name=race]').val();
    let gender = $('select[name=gender]').val();
    const newAge = new Age(birthDate, secondDate, gender, race);
    console.log(gender);
    console.log(race);
    let genderAndRace = `${Number(gender) + Number(race)}`;
    let lifeExpectancyResult = newAge.lifeExpectancy();
    console.log(genderAndRace);
    console.log('life expenctancy result here:', lifeExpectancyResult);
    if (!moment(birthDate,'YYYY-MM-DD').isValid()) {
      console.log('Invalid Date');
    } else {
      console.log('Valid Date');
    }
    //let newAge = new Age(birthDate, secondDate);
    console.log(birthDate);
    console.log(secondDate);
    console.log(newAge);
    let numberOut = newAge.getSecondsBetweenTwoDates();
    console.log(numberOut);
    $('#numberOut').text(numberOut);
  });
});
