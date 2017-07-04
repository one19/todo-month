const _ = require('lodash');

const DAY_NAMES = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const fmt = str => `0${str}`.slice(-2);
const weekday = (year, month, day) => new Date(year, month, day).getDay();
const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
const dayAbbrevAppender = dayNumber => (
  [0, 6].includes(dayNumber)
  ? DAY_NAMES[dayNumber].toUpperCase()
  : DAY_NAMES[dayNumber].slice(0, 2)
);


module.exports = (date, monthIndex) => {
  const year = date.getFullYear();
  const days = daysInMonth(year, monthIndex + 1);

  return _.times(days, index => (
    `### ${fmt(index + 1)}-${fmt(monthIndex + 1)}-${year}` +
    ` - ${dayAbbrevAppender(weekday(year, monthIndex, index + 1))}` +
    '\n- '
  ));
};
