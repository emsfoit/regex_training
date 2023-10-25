let regex = /hello/;
let str = 'hello world';
console.log(regex.test(str)); // true

// g is used to match more than one occurrence of the pattern
// example
regex = /hello/g;
str = 'hello world hello world';
console.log(regex.test(str)); // true

// i is used to perform case-insensitive matching
// example
regex = /hello/i;
str = 'Hello world';
console.log(regex.test(str)); // true

// ^ is used to match the beginning of a string
// example
regex = /^hello/;
str = 'hello world';
console.log(regex.test(str)); // true

// $ is used to match the end of a string
// example
regex = /hello$/;
str = 'hello world';
console.log(regex.test(str)); // false

// * is used to match zero or more occurrences of the pattern left to it
// example
regex = /hello*/;
str = 'hello world';
console.log(regex.test(str)); // true

// + is used to match one or more occurrences of the pattern left to it
// example
regex = /hello+/;
str = 'hello world';
console.log(regex.test(str)); // true

// ? is used to match zero or one occurrence of the pattern left to it
// example
regex = /hello?/;
str = 'hello world';
console.log(regex.test(str)); // true

// match either words that starts with n or g
// example
regex = /[ng]inja/;
str = 'ninja ninja ginja';
console.log(str.match(regex)); // [ 'ninja', 'ninja', 'ginja' ]

// the following will not match e000 because it does not start with a, b, c, 1, 2, or 3
regex = /[abc123]000/
str = 'a000 c000 2000 e000';
console.log(str.match(regex)); // [ 'a000', 'c000', '2000' ]
//  ^ this is called negated character set
regex = /[^abc123]000/
str = 'a000 c000 2000 e000';
console.log(str.match(regex)); // [ 'e000' ]

// matches any character that is not a digit
regex = /\D/;
str = '1';
console.log(regex.test(str)); // false

// matches any character that is a digit
regex = /\d/;
str = '1';
console.log(regex.test(str)); // true

// matches any word that starts with range from a to z the i after it
regex = /[a-z]i/;
str = 'ai';
console.log(regex.test(str)); // true

// repeating a character at least one time (it will match the all numbers)
regex = /[0-9]+/;
str = '1234567890';
console.log(regex.test(str)); // true

// match 11 digits
regex = /\d{11}/;
// or regex = /[0-9]{11}/
str = '123456789012';
// 2 will not match because it is 12 digits
console.log(str.match(regex)); // [ '12345678901', index: 0, input: '123456789012', groups: undefined ]

// match 11 letters word
regex = /[a-z]{11}/;
str = 'hello world';
// check matches
str.match(regex); // null

// match wiht min and max
regex = /[a-b]{5,8}/
str = 'my name is Mohmad'
console.log(str.match(regex)); // [ 'Mohmad', index: 11, input: 'my name is Mohmad', groups: undefined ]

// math at least 5 characters (we add comma that means at least 5 characters)
regex = /[a-b]{5,}/
str = 'my name is Mohmad'
console.log(str.match(regex)); // [ 'Mohmad', index: 11, input: 'my name is Mohmad', groups: undefined ]