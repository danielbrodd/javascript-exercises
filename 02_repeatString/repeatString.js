const repeatString = function(string, num) {
 let word = string;
 let repeatString = ''
 if (num < 0) {
    repeatString = 'ERROR'
 }else {
 for (let i = 0; i < num; i++) {
    repeatString += word
 }
  } return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
