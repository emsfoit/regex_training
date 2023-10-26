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

// Meta characters
// \w matches any word character (equal to [a-zA-Z0-9_])
regex = /\w/;
str = 'hello world';
str.match(regex); // [ 'h', index: 0, input: 'hello world', groups: undefined ]

// \W matches any non-word character (equal to [^a-zA-Z0-9_])
regex = /\W/;
str = 'hello world';
str.match(regex); // [ ' ', index: 5, input: 'hello world', groups: undefined ]

// \s matches any whitespaces characters (spaces, tabs, line breaks)
regex = /\s/
str = 'hello world';
str.match(regex); // [ ' ', index: 5, input: 'hello world', groups: undefined ]

// \S matches any non-whitespaces characters
regex = /\S/
str = 'hello world';
str.match(regex); // [ 'h', index: 0, input: 'hello world', groups: undefined ]

// \t matches tab
regex = /\t/
str = 'hello world';
str.match(regex); // null

// special characters
// + matches the preceding expression 1 or more times
// ex
regex = /hello+/
str = 'hello world';
str.match(regex); // [ 'hello', index: 0, input: 'hello world', groups: undefined ]

regex = /a[a-z]?/
str = 'a';
str.match(regex); // [ 'a', index: 0, input: 'a', groups: undefined ]
str = 'ab';
str.match(regex); // [ 'ab', index: 0, input: 'ab', groups: undefined ]

// \ escape character

// . matches any character except line breaks
regex = /car./
str = 'car1';
str.match(regex); // [ 'car1', index: 0, input: 'car1', groups: undefined ]
str = 'car';
str.match(regex); // null
str = 'car ';
str.match(regex); // [ 'car ', index: 0, input: 'car ', groups: undefined ]
str = 'car 2'
str.match(regex); // [ 'car 2', index: 0, input: 'car 2', groups: undefined ]
str = 'car 2 md'
str.match(regex); // [ 'car ', index: 0, input: 'car 2 md', groups: undefined ]

// .+ at least one character and it will match all characters
str = 'car 2 md'
regex = /car.+/
str.match(regex); // [ 'car 2 md', index: 0, input: 'car 2 md', groups: undefined ]

// ? matches the preceding expression 0 or 1 time
regex = /hello?/
str = 'helli world';
str.match(regex); // [ 'hell', index: 0, input: 'helli world', groups: undefined ]

// * matches the preceding expression 0 or more times
regex = /moham*ad/
str = 'mohammad';
str.match(regex); // [ 'mohammad', index: 0, input: 'mohammad', groups: undefined ]
str = 'mohamad';
str.match(regex); // [ 'mohamad', index: 0, input: 'mohamad', groups: undefined ]
str = 'mohaad';
str.match(regex); // [ 'mohaad', index: 0, input: 'mohaad', groups: undefined ]

// a[a-z]* matches a word that starts with a and followed by zero or more characters 
regex = /a[a-z]*/
str = 'ahmad';
str.match(regex); // [ 'ahmad', index: 0, input: 'ahmad', groups: undefined ]
str = 'ahmad 2';
str.match(regex); // [ 'ahmad', index: 0, input: 'ahmad 2', groups: undefined ]
// [] character set

// [^] negated character set


// examples
regex = /\d{3}\s\w{5}/
str = '123 hello world';
str.match(regex); // [ '123 hello', index: 0, input: '123 hello world', groups: undefined ]