const fibonacci = function(nPlace) {
   if(nPlace < 0) {return 'OOPS'}
   else {
    let previousNumber = 0;
    let nextNumber = 1;
    let nextRound;
    for (let i = 1; i <= nPlace; i++){
        nextRound =  previousNumber + nextNumber;
        previousNumber = nextNumber;
        nextNumber = nextRound;
    }return previousNumber;}
    
};

// for loop that goes for the length of the parameter
// i = 1
// need previousNumber & nextNumber
// nextNumber is sum of forloop
// previousNumber can be sum of previousloop, 
// first go 0() + 1() = 1 /sum = 1 
// second go 1() + 1 = 2 / sum = 2
// third go 
// fourth go 1(?) + 2(s) = 3

// Do not edit below this line
module.exports = fibonacci;
