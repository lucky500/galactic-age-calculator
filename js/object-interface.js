import { Obj } from './../js/object.js';
$(document).ready(function () {
  $('.btn').click(function (e) {
    e.preventDefault();
    let numberIn = $('#numberIn').val();
    let obj = new Obj(numberIn);
    let numberOut = obj.func();
    console.log(numberIn, numberOut);
    $('#numberOut').text(numberOut);
  });
});
