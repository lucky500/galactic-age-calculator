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
    let activity = $('#activity').val();
    const newAge = new Age(birthDate, secondDate, gender, race, activity);
    let lifeExpectancyResult = newAge.lifeExpectancy();
    $('.life-expectancy-results').text(lifeExpectancyResult);


    let numberOut = newAge.getSecondsBetweenTwoDates();
    $('#numberOut').text(numberOut);
  });
});
