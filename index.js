// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
 }