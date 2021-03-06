#!/usr/bin/env node

'use strict';

const [first, second, third] =  process.argv.slice(2)[0].replace("+", "=").split("=");

let noAnswer = true
for (let i = 0; i <= 9; i++) {
  let firstNum = Number(first.replace(/X/g, i));
  let secondNum = Number(second.replace(/X/g, i));
  let thirdNum = Number(third.replace(/X/g, i));
  
  if (firstNum + secondNum === thirdNum) {
    console.log(i);
    noAnswer = false;
  }
}

if (noAnswer) console.log("NA");
