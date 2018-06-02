const dateFormat = require('dateformat');

module.exports = (labelString, date = Date.now()) =>
  labelString
    .split(' ')
    .map(word => word
      .replace(/--(.*)/ig, match => dateFormat(new Date(date), match))
      .replace('--', ''))
    .join(' ');
