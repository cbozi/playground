import _ from "lodash";

console.log('hello from a')
console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }))