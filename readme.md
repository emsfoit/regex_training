# Regex Cheatsheet

A quick reference guide for using regular expressions (regex).

## Basics

- `.` - Any Character Except New Line
- `\d` - Digit (0-9)
- `\D` - Not a Digit (0-9)
- `\w` - Word Character (a-z, A-Z, 0-9, _)
- `\W` - Not a Word Character
- `\s` - Whitespace (space, tab, newline)
- `\S` - Not Whitespace (space, tab, newline)
- `\b` - Word Boundary
- `\B` - Not a Word Boundary
- `^` - Beginning of a String
- `$` - End of a String
- `[]` - Matches Characters in brackets
- `[^ ]` - Matches Characters NOT in brackets
- `|` - Either Or
- `()` - Group

## Quantifiers

- `*` - 0 or More
- `+` - 1 or More
- `?` - 0 or One
- `{3}` - Exact Number
- `{3,4}` - Range of Numbers (Minimum, Maximum)
- `{3,}` - at least

## Sample Regex Patterns

Here's an example of a common regex pattern for matching email addresses:

```regex
[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+
```

### Example match anything between two html tag

To match anything between two HTML tags using regular expressions, you can use the following pattern:
/<th>(.*?)<\/th>/g
Explanation:

<th>: Matches the opening tag.
(.*?): Uses a non-greedy capture group to match anything (including whitespace) between the opening and closing tags. The .*? part is the non-greedy match of any character (except for a newline) repeated zero or more times.
<\/th>: Matches the closing tag. The backslash \ is used to escape the forward slash /.
The g flag at the end is for global matching, which means it will find all matches in the input text.

Here's an example in Python


Certainly! Here's a basic template for a README explaining what a non-greedy or lazy quantifier is in the context of regular expressions:

---

# Non-Greedy (Lazy) Quantifier in Regular Expressions

## Overview

Regular expressions are powerful tools for pattern matching and text manipulation. When using quantifiers in regular expressions, it's important to understand the difference between greedy and non-greedy (lazy) quantifiers.

## Greedy Quantifier

A greedy quantifier in a regular expression matches as much as possible while still allowing the overall match to succeed. The default behavior of quantifiers, such as `*` (asterisk) and `+` (plus), is greedy.

Example:
```regex
/<pattern>.*<\/pattern>/
```

This pattern will match the longest possible sequence between the specified tags.

## Non-Greedy (Lazy) Quantifier

A non-greedy or lazy quantifier, indicated by adding `?` to a greedy quantifier, matches as little as possible while still allowing the overall match to succeed.

Example:
```regex
/<pattern>.*?<\/pattern>/
```

The `?` makes the `*` non-greedy. It matches the shortest possible sequence between the specified tags.

## Why Use Non-Greedy Quantifiers?

Non-greedy quantifiers are particularly useful when you want to match content between specific delimiters (e.g., HTML tags) in a way that avoids spanning multiple occurrences of the delimiters.

Without the non-greedy quantifier:
```regex
/<th>(.*)<\/th>/
```
Matches everything between the first `<th>` and the last `</th>`.

With the non-greedy quantifier:
```regex
/<th>(.*?)<\/th>/
```
Matches only the content between each pair of `<th>` and `</th>` tags separately.

## Usage

In your regular expressions, if you want to match the shortest possible sequence, consider using non-greedy quantifiers. This can be especially important when dealing with repetitive patterns or delimiters in text.

Example:
```regex
/<start>.*?<end>/
```

## Conclusion

Understanding the distinction between greedy and non-greedy quantifiers is essential for effective regular expression usage. Use non-greedy quantifiers when you want to perform the shortest possible match, avoiding unexpected results in your pattern matching.

---

Feel free to customize and expand upon this template to better fit your needs.