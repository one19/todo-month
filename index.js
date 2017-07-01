#!/usr/bin/env node
const colors = require('colors');
const copyPaster = require('copy-paste');

const supposedDate = process.argv[2];
let date = new Date(supposedDate);
if (!date.getDate()) date = new Date();

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];  
const DAY_NAMES = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const weekday = (year, month, day) => new Date(year, month, day).getDay();
const daysInMonth = (year, month) =>
  new Date(year, month, 0).getDate();
const dayAbbrevAppender = (dayNumber) =>
  dayNumber === 0 || dayNumber === 6 ? DAY_NAMES[dayNumber].toUpperCase() :
    DAY_NAMES[dayNumber].slice(0, 2);

const text = [...Array(daysInMonth(year, month + 1))].reduce((text, _, index) =>
  text.concat(
    `### ${('0' + (index + 1)).slice(-2)}-${('0' + month).slice(-2)}-${year}`,
    ` - ${dayAbbrevAppender(weekday(year, month, index + 1))}`,
    '\n- \n'
  )
  , `NIGHTLY ${MONTH_NAMES[month].toUpperCase()}\n`);

copyPaster.copy(text.concat('\n\n#todo'));
console.log('Wrote your month to the clipboard!'.rainbow)
