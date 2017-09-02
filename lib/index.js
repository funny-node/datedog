const today = new Date()
let [year, month, day] = [today.getFullYear(), today.getMonth() + 1, today.getDate()]

month = _addPaddingZero(month)
day = _addPaddingZero(day)

let defaultDate = year + '-' + month + '-' + day

/**
 * add leading zero for day and month
 * @param {string} val 
 */
function _addPaddingZero(val) {
  val = '' + val 
  return val.padStart(2, '0')
}

/**
 * calculate the interval days of two dates
 * @param  {string} from the date from, etc. 2014-06-28
 * @param  {string} to   the date to, etc. 2017-09-01
 * @return {number}      the interval days of two dates
 */
function calcDateInterval(from, to=defaultDate) {
  let [fromTimestamp, toTimeStamp] = [+new Date(from), +new Date(to)]

  if (fromTimestamp > toTimeStamp) {
    [fromTimestamp, toTimeStamp] = [toTimeStamp, fromTimestamp]
  }

  let intervalMillionSeconds = toTimeStamp - fromTimestamp

  let intervalDays = intervalMillionSeconds / 1000 / 60 / 60 / 24

  return intervalDays
}

/**
 * find the date after `days` days since Date `from` whose default is today
 * @param  {number} days 
 * @param  {string} from the Date `from` whose default is today, etc. 2014-06-28
 * @return {string}      the date we get
 */
function calcAfter(days, from=defaultDate) {
  let fromTimestamp = +new Date(from)
  let toTimeStamp = fromTimestamp + 1000 * 60 * 60 * 24 * days 

  let resDate = new Date(toTimeStamp)

  return resDate.getUTCFullYear() + 
    '-' + _addPaddingZero(resDate.getUTCMonth() + 1) + 
    '-' + _addPaddingZero(resDate.getUTCDate())
}

/**
 * find the date `days` days before Date `to` whose default is today
 * @param  {number} days 
 * @param  {string} to   the Date `to` whose default is today, etc. 2014-06-28
 * @return {string}      the date
 */
function calcBefore(days, to=defaultDate) {
  return calcAfter(-days, to)
}

exports.calcDateInterval = calcDateInterval
exports.calcAfter = calcAfter
exports.calcBefore = calcBefore