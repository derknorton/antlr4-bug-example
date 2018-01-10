'use strict';

// wrapper function for grunt configuration
module.exports = function(grunt) {

  grunt.initConfig({

    // read in the package information
    pkg: grunt.file.readJSON('package.json'),

    // grunt-contrib-jshint plugin configuration (lint for JS)
    jshint: {
      files: [
        'Gruntfile.js',
        '**/*.js',
        '!node_modules/**/*.js'
      ],
      options: {
        node: true
      }
    },

    // grunt-contrib-watch plugin configuration (monitor file changes)
    watch: {
      grammars: {
        files: ['**/*.g4'],
        tasks: ['clean', 'antlr4'],
        options: {
          spawn: true
        }
      },
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['clean', 'jshint', 'nodeunit', 'concat', 'uglify'],
        options: {
          spawn: true,
          reload: true
        }
      }
    },

    // grunt-contrib-clean plugin configuration (clean up files)
    clean: {
      generate: [
        '*.log',
        'grammar/BugExampleLexer.js',
        'grammar/BugExampleParser.js',
        'grammar/BugExampleListener.js',
        'grammar/BugExampleVisitor.js',
        'grammar/*.tokens'
      ],
      build: ['dist/*']
    },

    // grunt-antlr4 plugin configuration (generate parser)
    antlr4: {
      generate: {
        grammar: 'grammar/BugExample.g4',
        options: {
          grammarLevel: {
            language: 'JavaScript'
          },
          flags: [
            'Werror',
            'Xlog',
            'listener',
            'visitor'
          ]
        }
      }
    },

    // grunt-contrib-nodeunit plugin configuration (unit testing)
    nodeunit: {
      tests: 'test/**/*.js'
    },

    // grunt-contrib-concat plugin configuration (file concatenation)
    concat: {
      options: {
        separator: '\n'
      },
      dist: {
        // concatenate the source files and place the result in destination
        src: ['**/*.js', '!node_modules/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    // grunt-contrib-uglify plugin configuration (removes whitespace)
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-antlr4');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('generate', 'Generate the parser code.', ['clean:generate', 'antlr4']);
  grunt.registerTask('build', 'Build the library.', ['clean:build', 'jshint', 'nodeunit', 'concat', 'uglify']);
  grunt.registerTask('default', 'The default task.', ['clean:build', 'jshint', 'nodeunit', 'concat', 'uglify']);

};
