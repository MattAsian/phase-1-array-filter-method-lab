const { stringMatching } = require("expect");

// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    const result = drivers.filter(drivers => drivers === string || drivers === string.toLowerCase())
    return result;
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(drivers => drivers[0] === string[0]);
    return result;
}

function matchName(drivers, string) {
    const result = drivers.filter(drivers => drivers.name === string)
    return result;
}