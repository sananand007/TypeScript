import {base64encode} from './base64encoder';

var input = "Hello Ogres !!";

console.log("INPUT: ",  input);
console.log("OUTPUT: ", base64encode(input));