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
    console.log('life expectancy result:', lifeExpectancyResult);
    $('.life-expectancy-results').text(lifeExpectancyResult);

    let numberOut = newAge.getSecondsBetweenTwoDates();
    $('#numberOut').text(numberOut);

    const newGalacticAge = new GalacticAge(birthDate, secondDate, gender, race, activity);

    const newGalacticAgeTest = new GalacticAge();



    let lifeExpectancyInMercury  = lifeExpectancyResult;
    let mercuryAgeOut = newGalacticAgeTest.mercuryAge(lifeExpectancyInMercury);
    console.log('1:', lifeExpectancyInMercury);
    console.log('2:', mercuryAgeOut);
    $('#age-in-mercury').text(mercuryAgeOut);

    let venusAgeOut = newGalacticAge.venusAge();
    $('#age-in-venus').text(venusAgeOut);

    let marsAgeOut = newGalacticAge.marsAge();
    $('#age-in-mars').text(marsAgeOut);

    let jupiterAgeOut = newGalacticAge.jupiterAge();
    $('#age-in-jupiter').text(jupiterAgeOut);

  });
});
