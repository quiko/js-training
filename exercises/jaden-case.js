'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function JadenCase(param){
 
    let  Capitalized = param.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)) .join(' ')
 
 return Capitalized
     
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(JadenCase("loulou"), "Loulou")
assert.strictEqual(JadenCase("hello world"), "Hello World")

// End of tests */
