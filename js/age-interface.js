import { Age } from './../js/age.js';

$(document).ready(function () {
  $('.btn').click(function (e) {
    e.preventDefault();
    let birthDate = $('#birth-date').val();
    console.log(birthDate);
    if (!moment(birthDate,'YYYY-MM-DD').isValid()) {
      console.log('Invalid Date');
    } else {
      console.log('Valid Date');
    }
    let newAge = new Age(moment(birthDate));
    console.log(newAge);
    // let numberOut = obj.func();
    // $('#numberOut').text(numberOut);
  });
});
