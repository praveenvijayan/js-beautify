# JS Beautifier

...or, more specifically, all of the code powering [jsbeautifier.org](http://jsbeautifier.org/).

This is a node implementation of jsbeautifier.  

### Install

    npm install -g jsbeautify

### Usage

    jsbeautify [options] [input file] [output file]

**Example**:

    jsbeautify minifiy.js ../lib/main.js 

### Options

* **indent_size** - `4` - Indentation size. 
* **indent_char** - `space` - Character to indent with - `tab` | `space`.
* **preserve_newlines** - `true` - Whether existing line breaks should be preserved - `true` | `false`.
* **preserve_max_newlines** - `unlimited` - Maximum number of line breaks to be preserved in one chunk - `unlimited` | `1` | `2` | `#`.
* **jslint_happy** - `false` - If true, then jslint-stricter mode is enforced - `true` | `false`.
* **brace_style** - `collapse` - put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line - `collapse` | `expand` | `end-expand` | `expand-strict`.
* **space_before_conditional** - `false` - Should the space before conditional statement be added, `if(true)` vs `if (true)`.


### Links

* [jsbeautifier.org](http://jsbeautifier.org/)
* [jsbeautifier.org github](https://github.com/einars/js-beautify)
* [node jsbeautify](http://decodize.com/jsbeautify)
