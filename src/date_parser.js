const colors = require('colors'); // eslint-disable-line no-unused-vars

module.exports = (dateString) => {
  const date = dateString ? new Date(dateString) : new Date();
  if (!date.getDate()) throw new Error('Invalid date string!'.red);
  return date;
};
