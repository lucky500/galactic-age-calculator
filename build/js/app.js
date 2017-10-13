(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Age = exports.Age = function Age(age) {
  _classCallCheck(this, Age);

  this.age = age;
};

},{}],2:[function(require,module,exports){
'use strict';

var _age = require('./../js/age.js');

$(document).ready(function () {
  $('.btn').click(function (e) {
    e.preventDefault();
    var birthDate = $('#birth-date').val();
    console.log(birthDate);
    if (!moment(birthDate, 'YYYY-MM-DD').isValid()) {
      console.log('Invalid Date');
    } else {
      console.log('Valid Date');
    }
    var newAge = new _age.Age(moment(birthDate));
    console.log(newAge);
    // let numberOut = obj.func();
    // $('#numberOut').text(numberOut);
  });
});

},{"./../js/age.js":1}]},{},[2]);
