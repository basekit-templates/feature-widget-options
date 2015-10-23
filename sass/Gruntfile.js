module.exports = function(grunt) {
  function recruseImports (filename) {
  	var str = grunt.file.read(filename),
  		filecontents = '',
  		imports = /@import\W+?[\"\'](.*?)[\"\']\;/ig,
  		matches = str.match(imports);

  	if(matches !== null && matches.length > 0) {
		for (var i = 0; i < matches.length; i++) {
			swapOutString = matches[i];
			filecontents = recruseImports(swapOutString.replace(imports, "$1"));
			str = str.replace(matches[i], filecontents);
			filecontents = '';
		}
	}
	return str;
  }

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    scsslint:{
     src: ['bkl-dev.scss']
    },
    csslint: {
      options:{
        csslintrc: 'config/.csslintrc'
      }
     }
  });

  grunt.loadNpmTasks('grunt-scsslint')

  // Default task(s).
  grunt.registerTask('build', function () {
  	var buildStr = recruseImports('bk-scss-precompiled.scss'),
        vars = grunt.file.read('vars.scss');

    // This is the version that gets linted; includes
    // all the vars so linting doesn't fall over
    grunt.file.write('bkl-dev.scss', vars+buildStr);

    // This is the production version of bkb. The
    // one that will get released with BaseKit
    grunt.file.write('bk-scss-framework.scss', buildStr);
        grunt.task.run('scsslint');
  });
};

