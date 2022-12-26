const palindromes = function (str) {
    const noCommastr = str.replace(/[^|\w\']/g, '');
    
    const noCommaArray = noCommastr.split('');
  
   
    const reversed = noCommaArray.reverse().join('');
    

    if ( noCommastr.toUpperCase() == reversed.toUpperCase()){
        return true;
    }else return false;
    
};



// Do not edit below this line
module.exports = palindromes;
