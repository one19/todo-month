#!/usr/bin/env node
// this ~crazy-scary~ _amazing_ package mutates Strings globally
const colors = require('colors'); // eslint-disable-line no-unused-vars
const copyPaster = require('copy-paste');
const dayStringer = require('./src/day_string_creator');

const target = process.argv[2];
const date = target ? new Date(target) : new Date();
if (!date.getDate()) throw new Error('Invalid date string!'.red);

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];
const monthIndex = date.getMonth();


const intro = `# NIGHTLY ${MONTH_NAMES[monthIndex].toUpperCase()}`;
const list = dayStringer(date, monthIndex);
const end = '\n#todo';


const result = [intro, ...list, end].join('\n');
copyPaster.copy(result);
// eslint-disable-next-line no-console
console.log('Wrote your month to the clipboard!'.rainbow.concat('🐶'));
