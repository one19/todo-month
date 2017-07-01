# TODO-MONTH

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

###TODO:
- add tests
- add ci & badge
- add easy-patching npm deploy scripts