const datedog = require('../lib/index')
const {calcDateInterval, calcAfter, calcBefore} = datedog

// calcDateInterval
console.log(calcDateInterval('2014-06-28', '2017-09-01')) // 1161
console.log(calcDateInterval('2017-09-01', '2014-06-28')) // 1161
console.log(calcDateInterval('2014-06-28')) 


// calcAfter
console.log(calcAfter(1161, '2014-06-28')) // 2017-09-01
console.log(calcAfter(365)) // the day one year after


// calcBefore
console.log(calcBefore(1161, '2017-09-01')) // 2014-06-28
console.log(calcBefore(365)) // the day one year ago