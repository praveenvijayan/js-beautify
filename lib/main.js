(function() {
	var filedata, fs, beautify, options, optimist, settings, jsoptions, indentchar;
	
	fs = require('fs');
	beautify = require('../beautify.js');
	optimist = require('optimist');
	
	options = optimist.usage('Usage: $0 [options] [INPUT] [OUTPUT]').describe('indent', 'Indentation size').alias('i', 'indent')["default"]('indent',4).describe('indent_char', 'Character to indent with - eg "tab" or "space"').alias('c', 'indent_char')["default"]('indent_char',' ').describe('preserve_newlines', 'Whether existing line breaks should be preserved').alias('p', 'preserve_newlines')["default"]('preserve_newlines',true).describe('preserve_max_newlines', 'Maximum number of line breaks to be preserved in one chunk').alias('m', 'preserve_max_newlines')["default"]('preserve_max_newlines','unlimited').describe('jslint_happy', 'If true, then jslint-stricter mode is enforced').alias('l', 'jslint_happy')["default"]('jslint_happy',false).describe('brace_style', '"collapse" | "expand" | "end-expand" | "expand-strict" put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line.').alias('b', 'brace_style')["default"]('brace_style','collapse').describe('space_before_conditional', 'should the space before conditional statement be added, "if(true)" vs "if (true)"').alias('s', 'space_before_conditional')["default"]('space_before_conditional',false).argv;
	
	options["in"] = options._[0];
	options["in"] = options._[1];
	if(!options._[1]){
		options._[1] = options._[0];
	}
	if(options.indent_char === "tab"){
		indentchar = '\t';
	}else{
		indentchar = ' ';	
	}
	jsoptions = {
		indent_size:options.indent,
		indent_char:indentchar,
		preserve_newlines:options.preserve_newlines,
		preserve_max_newlines:options.preserve_max_newlines,
		jslint_happy:options.jslint_happy,
		brace_style:options.brace_style,
		space_before_conditional:options.space_before_conditional
	}
	
	console.log(jsoptions);
	
	/*
process.argv.forEach(function (val, index, array) {
	  console.log(index + ': ' + val);
	});
*/
	
	
	fs.readFile(options._[0],'utf8',function(err,data){
	  if(err) {
		console.error("Could not open file: %s", err);
		process.exit(1);
	 }
	  
	  filedata = beautify.js_beautify(data.toString('utf8'), jsoptions);
	  
	  fs.writeFile(options._[1], filedata, function(err){
		  	if(err) {
				console.error("Error saving file", err);
				process.exit(1);
		  	}
			console.log('File beautified & saved!');
		});
		
		
	});
		
}).call(this)