import { Age } from './../js/age.js';

$(document).ready(function () {
  $('.btn').click(function (e) {
    e.preventDefault();
    let birthDate = $('#birth-date').val();
    let secondDate = $('#second-date').val();
    console.log(birthDate);
    if (!moment(birthDate,'YYYY-MM-DD').isValid()) {
      console.log('Invalid Date');
    } else {
      console.log('Valid Date');
    }
    let newAge = new Age(birthDate, secondDate);
    console.log(birthDate);
    console.log(secondDate);
    console.log(newAge);
    let numberOut = newAge.getSecondsBetweenTwoDates();
    console.log(numberOut);
    $('#numberOut').text(numberOut);
  });
});
