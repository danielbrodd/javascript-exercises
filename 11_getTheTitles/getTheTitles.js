const getTheTitles = function(books) {
    const bookTitles = books.map(function(book){
        const key =Object.values(book)[0]
        return key
    })
    return bookTitles
};


// Do not edit below this line
module.exports = getTheTitles;
