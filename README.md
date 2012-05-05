# JS Beautifier

...or, more specifically, all of the code powering
[jsbeautifier.org](http://jsbeautifier.org/).

This is a node implementation of jsbeautifier.  

###Install

``` 
npm install -g jsbeautify
```

###Usage

``` 
jsbeautify [options] [input file] [output file]

Eg:

jsbeautify minifiy.js ../lib/main.js 

```

###Options
``` 
indent_size - Indentation size,
indent_char: Character to indent with,
preserve_newlines: Whether existing line breaks should be preserved,
preserve_max_newlines: Maximum number of line breaks to be preserved in one chunk,
jslint_happy: If true, then jslint-stricter mode is enforced,
brace_style: "collapse" | "expand" | "end-expand" | "expand-strict" - put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line.,
space_before_conditional: Should the space before conditional statement be added, "if(true)" vs "if (true)"

```

### Links
[jsbeautifier.org](http://jsbeautifier.org/)
[jsbeautifier.org github](https://github.com/einars/js-beautify)
[node jsbeautify](http://decodize.com/jsbeautify)
