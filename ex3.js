'use strict' //嚴格模式(?
var person = {
  firstname:'Irina',
  lastname:'Chen',
  greet0: function() {
    console.log('obj-method-this=');
    console.log(this);
  }, //逗號
  greet1: (() => {
    console.log('obj-arrow-this=');
    console.log(this);
  }),  //看起來非常多行
  greet2: function() {
    (() => {
      console.log('obj-method-arrow-this=');
      console.log(this);
    }) ();
  },
  greet3: function() {
    (function() {
      console.log('obj-method-fn-this=');
      console.log(this);
    }) ();
  },  //也是很多行
  greet4: function() {
    (function() {
      (() => {
        console.log(this.firstname);
      }) ();
    }) ();
  },
}

person.greet0();
person.greet1();
person.greet2();
person.greet3();
person.greet4();

(function() {          //undefined 下面都很多行
  console.log('fn-this=');
  console.log(this);
}) ();

(() => {
  console.log('arrow-this=');
  console.log(this);
}) ();

(function() {
  (function() {
    console.log('fn-fn-this=');
    console.log(this);
  }) ();
}) ();

(function() {
  (() => {
    console.log('fn-arrow-this=');
    console.log(this);
  }) ();
}) ();
