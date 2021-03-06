# Changelog

## [Unreleased][]

## [1.6.0][] - 2018-12-13
- Add `-c` for github markdown compatability.

## [1.5.3][] - 2018-11-10
- Update readme again with more information.

## [1.5.2][] - 2018-06-27
- Patch readme with codeclimate

## [1.5.1][] - 2018-06-13
- Add a package.json script for manual lint fixing.
- patch issue where `-t` and `-T` were ignored by date parsing
- Change to codeclimate for coverage and quality

## [1.5.0][] - 2018-06-02
- Patch readme formatting again.
- Add `--` prefixed dateformat formatting to the title & end blocks

## [1.4.2][] - 2018-05-19
- Patch keywords and readme formatting.

## [1.4.1][] - 2018-05-19
- Added coverage and CI tools.
- Transition to transpiled version.

## [1.4.0][] - 2018-04-22
- Allowed the user to set the title using -T
- Allowed the user to set the tag using -t
- Allowed the user to default to exporting the next month
- Store input configs by default for subsequent run ease
- Exposed --reset so end user can kill pre-existing config

## [1.3.0][] - 2018-02-26
### Changed
- Made the date formatter slightly more accepting.
### Added
- `-weekdays` for only generating using the weekdays.

## [1.2.0][] - 2017-07-17
### Changed
- Refactored date string parsing to use standard date string format.
- Consistify package & git repo name to `todo-month`.
### Added
- Adds `prepush` testing & `esling --fix`es into the commit itself!
- Adds optionally formatting dates to any valid datestring.

## [1.1.0][] - 2017-07-08
### Changed
- Refactored code, adding commander.
### Added
- `-reverse`, `--dog`, and `--moar-dog` flag handling.

## [1.0.1][] - 2017-07-07
### Changed
- Refactored code, adding lodash.
### Added
- Changelog versioning

[Unreleased]: https://github.com/one19/monthTodo/compare/v1.6.0...HEAD
[1.6.0]: https://github.com/one19/monthTodo/compare/v1.5.3...v1.6.0
[1.5.3]: https://github.com/one19/monthTodo/compare/v1.5.2...v1.5.3
[1.5.2]: https://github.com/one19/monthTodo/compare/v1.5.1...v1.5.2
[1.5.1]: https://github.com/one19/monthTodo/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/one19/monthTodo/compare/v1.4.2...v1.5.0
[1.4.2]: https://github.com/one19/monthTodo/compare/v1.4.1...v1.4.2
[1.4.1]: https://github.com/one19/monthTodo/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/one19/monthTodo/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/one19/monthTodo/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/one19/monthTodo/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/one19/monthTodo/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/one19/monthTodo/compare/v1.1.0...v1.1.0
[1.0.1]: https://github.com/one19/monthTodo/tree/v1.0.1