# TODO-MONTH

The tiniest little module for exporting a pretty md month of stuff to do
[![Build status](https://badge.buildkite.com/5427c81c51ca67dff45bff63a533c3a1cbb864416d87210167.svg)](https://buildkite.com/the-hoard/todo-month)

### What it is:

A tiny node module that exports a blob of text to your clipboard when invoked.
It pretty-prints your month into a series of days, with a single empty task pre-attached to each day. It pastes weekend days in full, while 3 character abbreviating all other days, so weekends stand out more. EG:

```
### 02-06-2017 - SUNDAY
- 
### 03-06-2017 - Mo
- 
```

This is really useful for people who like to make the most of their days, weeks, and months, and who like to use less intense todo systems like markdown editors (Marxico, IAWriter, Bear).

## HOW TO USE IT:

1.  `npm i -g month-todo` || `yarn add --global month-todo`
2. When in your month (like on the first): `todo-month` anywhere in your terminal
3. For an upcoming month (like september): `todo-month 2017-09`
4. Bask in the pretty colors when the month is deposited in your clipboard

### TODO:
- add tests
- add ci & badge
- add easy-patching npm deploy scripts