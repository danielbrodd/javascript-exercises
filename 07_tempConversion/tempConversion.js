const convertToCelsius = function(tempF) {
    return Math.round((tempF - 32) * (5/9) *10) / 10;

};

const convertToFahrenheit = function(tempC) {
/*   let tempF = (
    tempC * (9/5) + 32
  ); */
    return parseFloat( /*tempF befor optimizing*/(tempC * (9/5) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
