const _ = require('lodash');
const dateFormat = require('dateformat');

const DAY_NAMES = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
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


module.exports = (year, monthIndex, options = {}) => {
  const {
    compat, reverse, weekdays, format = 'dd-mm-yyyyxx',
  } = options;

  const checkbox = compat ? '- [ ] ' : '- ';

  /*
  * Doing a bit of nonstandard behaviour proofing here:
  * Sometimes it can be hard to remember proper capitalisation params.
  * Instead of just chucking back really unhelpful DDDDYYYY strings, we downcase.
  *
  * Also, the `xx` is to handle appending `MO/TU/SATURDAY` tags that I personally like.
  */
  const defaultFormat = format === 'dd-mm-yyyyxx';
  const safeFormat = defaultFormat ?
    format.slice(0, -2) :
    format.replace(/[YM]|D+(?!ate)/g, match => match.toLowerCase());

  const days = daysInMonth(year, monthIndex + 1);
  let daysArray = reverse ? _.times(days, Number).reverse() : _.times(days, Number);

  if (weekdays) {
    daysArray = daysArray.filter(day => ![0, 6].includes(weekday(year, monthIndex, day + 1)));
  }

  const stringDays = daysArray.map(dayI => (
    '### ' +
    `${dateFormat(new Date(year, monthIndex, dayI + 1), safeFormat)}` +
    `${defaultFormat ? ` - ${customDays(weekday(year, monthIndex, dayI + 1))}` : ''}` +
    `\n${checkbox}`
  ));

  return remapDogDays(stringDays, options);
};
