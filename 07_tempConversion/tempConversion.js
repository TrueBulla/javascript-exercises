const ftoc = function(tempF) {
  let newTempCelsius = (tempF - 32) * (5/9);
  return Math.round(newTempCelsius * 10)/10
};

const ctof = function(tempC) {
  let newTempFahren = (tempC * (9/5) + 32)
  return Math.round(newTempFahren * 10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
