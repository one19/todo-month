#!/usr/bin/env node
const _ = require('lodash');
// this ~crazy-scary~ _amazing_ package mutates Strings globally
const colors = require('colors'); // eslint-disable-line no-unused-vars
const copyPaster = require('copy-paste');

const target = process.argv[2];
const date = target ? new Date(target) : new Date();
if (!date.getDate()) throw new Error('Invalid date string!'.red);

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];
const DAY_NAMES = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const year = date.getFullYear();
const month = date.getMonth();

const fmt = str => `0${str}`.slice(-2);
const weekday = (year, month, day) => new Date(year, month, day).getDay();
const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
const dayAbbrevAppender = dayNumber => (
  [0, 6].includes(dayNumber)
  ? DAY_NAMES[dayNumber].toUpperCase()
  : DAY_NAMES[dayNumber].slice(0, 2)
);

const intro = `NIGHTLY ${MONTH_NAMES[month].toUpperCase()}`;
const days = daysInMonth(year, month + 1);
const list = _.times(days, index => (
  `### ${fmt(index + 1)}-${fmt(month)}-${year}` +
  ` - ${dayAbbrevAppender(weekday(year, month, index + 1))}` +
  '\n- '
));
const end = '\n#todo';

const result = [intro, ...list, end].join('\n');
copyPaster.copy(result);
// eslint-disable-next-line no-console
console.log('Wrote your month to the clipboard!'.rainbow);
