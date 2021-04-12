### Hexlet tests and linter status:
[![Actions Status](https://github.com/mirreinh/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/mirreinh/frontend-project-lvl2/actions)

[![Node CI](https://github.com/mirreinh/frontend-project-lvl2/workflows/node-ci/badge.svg)](https://github.com/mirreinh/frontend-project-lvl2/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/8d0a20eef264c55daf38/maintainability)](https://codeclimate.com/github/mirreinh/frontend-project-lvl2/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/8d0a20eef264c55daf38/test_coverage)](https://codeclimate.com/github/mirreinh/frontend-project-lvl2/test_coverage)

# Gendiff
GenDiff is a diff tool to compare text differences between two text files.
___
## About  
**__gendiff__** compares content of the two files of the following extensions:
* .json
* .yml

...and outputs the result in the terminal in three possible formats:  
* "_stylish_": demostrative tree-like structure
* "_plain_": verbose plain text
* "_json_": json-like string
___
## Usage
```  
gendiff [options] <filepath1> <filepath2>
Options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: "stylish")
  -h, --help           output usage information
```
___
## Installation
Clone this repo
```
make install
make link  
```
___
## Examples
#### Comparing .json files