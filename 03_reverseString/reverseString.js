const reverseString = function(string) {
    let stringLetters = string.split("")
    let reverseString =''
     for (let i = 0; i < stringLetters.length; i = i) {
       reverseString += stringLetters.pop();
     }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
