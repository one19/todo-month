const fs = require('fs');
const os = require('os');

const defaultConfigPath = `${os.homedir()}/.todo-month-rc`;

const ARGUMENTS = [
  'next', 'reverse', 'weekdays', 'format', 'dog', 'moarDog', 'title', 'tag',
];

// if any part fails, we don't really care. Just let it exit silent
module.exports.readConfig = (location = defaultConfigPath) => {
  let config = {};
  try {
    config = JSON.parse(fs.readFileSync(location));
  } catch (_) { /* eslint-disabe-line */ }
  return config;
};

// same goes for this bad boye. It's not worth the potential of not working
module.exports.saveConfig = (options, location = defaultConfigPath) => {
  try {
    fs.writeFileSync(location, JSON.stringify(ARGUMENTS.reduce(
      (cleanOptions, property) =>
        ({ ...cleanOptions, [property]: options[property] })
      , {},
    )), { encoding: 'utf8', flag: 'w' });
  } catch (_) { /* eslint-disabe-line */ }
};
