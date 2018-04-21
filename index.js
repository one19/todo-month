#!/usr/bin/env node
// this ~crazy-scary~ _amazing_ package mutates Strings globally
const colors = require('colors'); // eslint-disable-line no-unused-vars
const copyPaster = require('copy-paste');
const program = require('commander');
const dayStringer = require('./src/day_string_creator');
const parseDateString = require('./src/date_parser');

program
  .command('* [dateString]')
  .option('-r  --reverse', 'Reverse month output flow')
  .option('-w  --weekdays', 'Only return weekdays in month')
  .option('-f, --format [string]', 'Optionally pass a date format string in')
  .option('-d, --dog', 'Add doggos')
  .option('-D, --moar-dog', 'Add lots of dog')
  .option('-T, --title [string]', 'replace the title')
  .option('-t, --tag [string]', 'replace the hashtag')
  .parse(process.argv);


const options = program.commands[0];
const possibleDateString = program.commands[0].args[0];
const date = parseDateString(possibleDateString);

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];
const monthIndex = date.getMonth();
const thisMonth = MONTH_NAMES[monthIndex];

const defaultIntro = `# NIGHTLY ${thisMonth.toUpperCase()}`;
const intro = options.title ? `${options.title.replace('-X', thisMonth)}` : defaultIntro;

const list = dayStringer(date, monthIndex, options);
const end = `\n${options.tag ? options.tag : '#todo'}`;


const result = [intro, ...list, end].join('\n');
copyPaster.copy(result);
// eslint-disable-next-line no-console
console.log('Wrote your month to the clipboard!'.rainbow.concat('🐶'));
