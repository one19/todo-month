#!/usr/bin/env node
// this ~crazy-scary~ _amazing_ package mutates Strings globally
const colors = require('colors'); // eslint-disable-line no-unused-vars
const copyPaster = require('clipboardy');
const program = require('commander');
const dayStringer = require('./src/day_string_creator');
const parseDateString = require('./src/date_parser');
const simpleFormatTag = require('./src/simple_date_formatter');
const { readConfig, saveConfig } = require('./src/configurator');

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December',
];

// when adding an option, don't forget to pass it to saveConfig!
program
  .command('* [dateString]')
  .option('-n --next', 'use the month after the selected month')
  .option('-c --compat', 'use github compatible checkboxes')
  .option('-r  --reverse', 'Reverse month output flow')
  .option('-w  --weekdays', 'Only return weekdays in month')
  .option('-f, --format [string]', 'Optionally pass a date format string in')
  .option('-d, --dog', 'Add doggos')
  .option('-D, --moar-dog', 'Add lots of dog')
  .option('-T, --title [string]', 'replace the title')
  .option('-t, --tag [string]', 'replace the hashtag')
  .option('-R, --reset', 'replace existing config with this run\'s args')
  .parse(process.argv);

const existingConfig = readConfig();
const options = {
  ...(program.commands[0].reset ? {} : existingConfig),
  ...program.commands[0],
};

const possibleDateString = program.commands[0].args[0];
const date = parseDateString(possibleDateString);

// REFACTOR: this is a little hard to parse.
// just handles `--next` hitting the end of the year
const rolloverNextYear = date.getMonth() + options.next === 12;
const monthIndex = options.next ? // eslint-disable-line no-nested-ternary
  rolloverNextYear ? 0 : date.getMonth() + 1
  : date.getMonth();
const year = rolloverNextYear ? date.getFullYear() + 1 : date.getFullYear();

const thisMonth = MONTH_NAMES[monthIndex];
const defaultIntro = `# NIGHTLY ${thisMonth.toUpperCase()}`;
const intro = options.title ?
  simpleFormatTag(options.title, new Date(year, monthIndex)) :
  defaultIntro;

const list = dayStringer(year, monthIndex, options);
const end = `\n${options.tag ? simpleFormatTag(options.tag, new Date(year, monthIndex)) : '#todo'}`;


const result = [intro, ...list, end].join('\n');
copyPaster.write(result);
// eslint-disable-next-line no-console
console.log('Wrote your month to the clipboard!'.rainbow.concat('🐶'));

saveConfig(options);
