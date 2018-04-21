# TODO-MONTH


[![Maintenance status](https://raw.githubusercontent.com/one19/project-status/master/cache/todo-month/maintained.svg?sanitize=true)](https://github.com/one19/project-status) [![published on npm!](https://raw.githubusercontent.com/one19/project-status/master/cache/todo-month/npm.svg?sanitize=true)](https://www.npmjs.com/package/todo-month)

---

The tiniest little module for exporting a pretty md month of stuff to do

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

1.  `npm i -g todo-month` || `yarn add --global todo-month`
2. When in your month (like on the first): `todo-month` anywhere in your terminal
3. For an upcoming month (like september): `todo-month 2017-09 --reverse`
4. Bask in the pretty colors when the month is deposited in your clipboard

### Let's get argumentative!

`todo-month` can be called with a dizzying number of arguments!
| Argument | Long Call | Accepts | Description | Example |
| :---: | :---: | :---: | --- | :---: |
| -r | --reverse | `void` | reverse the days, starting with the end of the month | `todo-month -r` |
| -n | --next | `void` | use the next month, instead of this/the arg one | `todo-month -n` |
| -w | --weekdays | `void` | don't list weekends in output month | `todo-month --weekdays` |
| -T | --title | `string` | replace the title, optionally use month | `todo-month -T "-x's tasks:"` |
| -t | --tag | `string` | replace the bottom categorization tag | `todo-month --tag "#todo/nightly"` |
| -d | --dog | `void` | replaces some characters with dogfaces | `todo-month --dog` |
| -D | --moard-dog | `void` | replaces *alot* of characters with face of dog | `todo-month --D` |
| * | * | `string` | todo month accepts a date string as an input, and tries to use it | `todo-month 10-12-1987` |
| -f | --format | `string` | **explained below in detail**, format the date used to make days | `todo-month -f "ddd-mm"` |

### The great formatting:

This app is capable of outputting a dizzying amount of date formats. The only nonstandard format is the one you get when you only run `month-todo`.
If you pass it an arbitrary format string, you get that arbitrary format output!
For example: `todo-month -f "dddd - yy - mm"`
```
### Saturday - 17 - 07
- 
### Sunday - 17 - 07
- 
```
Or if you really want to get wacky: `todo-month -f 'yyy, dddd, dd, d, m, mm, y, bippipy yyyy'`
```
### 17y, Saturday, 01, 1, 7, 07, y, bippipy 2017
- 
### 17y, Sunday, 02, 2, 7, 07, y, bippipy 2017
- 
```
Or simply: `todo-month --reverse --dog -f 'ddd - yy'`
```
### Mon 🐶 17
- 
### Sun 🐶 17
- 
```
And now supporting *only scheduling weekdays!* `todo-month -w -f 'dddd'`
```
### Friday
- 
### Monday
- 
```

### TODO:
- refactor filter application to be more streamlined
- refactor construction of months/days to be more modular
- implement random/even distribution of regular events
- allow users to save their standard calls to a config so they only have to input their preferences once
- coverage
- tests interacting with the command line
