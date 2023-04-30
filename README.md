# README

## About

This is simple library for make regular expression for javascript to be able to do searching or filtering like mysql does when using "WHERE like" condition.

## Usage
for example if we want to search "Budi go school" in "Budi is going to the school"
```
import regex_like from '@autotrof/regex-like'

const the_paragraph = "Budi is going to the school"
let regex = regex_like('Budi go school')

if (regex.test(the_paragraph)) {
  console.log("keyword found")
}
```