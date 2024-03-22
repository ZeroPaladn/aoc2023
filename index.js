import { fileReadtoArray } from './helpers/helpFunctions.js';

let data = await fileReadtoArray('./testData/day1_test.txt');

console.log(data[0]);