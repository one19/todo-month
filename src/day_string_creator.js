const _ = require('lodash');
const dateFormat = require('dateformat');

const DAY_NAMES = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const weekday = (year, month, day) => new Date(year, month, day).getDay();
const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
const customDays = dayNumber => (
  [0, 6].includes(dayNumber)
  ? DAY_NAMES[dayNumber].toUpperCase()
  : DAY_NAMES[dayNumber].slice(0, 2)
);

const remapDogDays = (days, opts) => {
  let dogDays = [...days];
  if (opts.dog) dogDays = dogDays.map(day => day.replace(/\s-\s/, ' 🐶 '));
  if (opts.moarDog) dogDays = dogDays.map(day => day.replace(/(\d)-/g, '$1🐶'));
  return dogDays;
};


module.exports = (date, monthIndex, options = {}) => {
  const { reverse, format = 'dd-mm-yyyyxx' } = options;
  const safeFormat = format.slice(-2) === 'xx' ? format.slice(0, -2) : format;
  const myFormat = safeFormat !== format;

  const year = date.getFullYear();
  const days = daysInMonth(year, monthIndex + 1);
  const daysArray = reverse ? _.times(days, Number).reverse() : _.times(days, Number);

  const stringDays = daysArray.map(dayI => (
    '### ' +
    `${dateFormat(new Date(year, monthIndex, dayI + 1), safeFormat)}` +
    `${myFormat ? ` - ${customDays(weekday(year, monthIndex, dayI + 1))}` : ''}` +
    '\n- '
  ));
  return remapDogDays(stringDays, options);
};
