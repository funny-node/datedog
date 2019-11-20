# datedog 

a tiny library to calculate the days of two certain dates or find the date some days before / after a certain date 


[![Build Status](https://travis-ci.org/hanzichi/datedog.svg?branch=master)](https://travis-ci.org/hanzichi/datedog)
[![codecov](https://codecov.io/gh/hanzichi/datedog/branch/master/graph/badge.svg)](https://codecov.io/gh/hanzichi/datedog)
[![npm](https://img.shields.io/npm/v/datedog.svg?style=flat)](https://www.npmjs.com/package/datedog)
[![npm](https://img.shields.io/npm/dt/datedog.svg?style=flat)](https://www.npmjs.com/package/datedog)
[![Code Climate](https://codeclimate.com/github/hanzichi/datedog/badges/gpa.svg)](https://codeclimate.com/github/hanzichi/datedog)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hanzichi/datedog/master/LICENSE)

## features

- calculate the interval days between two dates
- find the date xx days after a certain date whose default is today
- find the date xx days before a certain date whose default is today

## usage

### cli 

1. `npm install datedog -g`
2. `datedog -h` to see the usage

### server

1. `npm install datedog --save`
2. `const datedog = require('datedog')`

### broswer

1. `<script src="datedog.js"></script>`
2. use `datedog` as a global variable

## documentation

### calcDateInterval(dateFrom[, dateTo])

### calcAfter(daysSince[, dateFrom])

### calcBefore(daysAgo[, dateTo])

## license

MIT