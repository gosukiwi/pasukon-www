const sass = require('node-sass')

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      build: {
        src: 'src/index.js',
        dest: 'docs/index.js',
        options: {
          standalone: 'Pasukon'
        }
      }
    },
    terser: {
      build: {
        files: {
          'docs/index.js': 'docs/index.js'
        }
      }
    },
    sass: {
      options: {
        implementation: sass
      },
      build: {
        files: {
          'docs/css/style.css': 'src/sass/style.sass'
        }
      }
    },
    copy: {
      build: {
        files: [
          { 'docs/index.html': 'src/index.html' },
          { expand: true, flatten: true, src: ['src/pasukon.*.js'], dest: 'docs/' }
        ]
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'docs',
          hostname: 'localhost',
          livereload: true,
          open: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['browserify', 'terser', 'copy']
      },
      sass: {
        files: ['src/**/*.sass'],
        tasks: ['sass']
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['copy']
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-terser')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.registerTask('default', ['browserify', 'terser', 'sass', 'copy'])
  // grunt.registerTask('default', ['browserify', 'sass', 'copy'])
  grunt.registerTask('serve', ['default', 'connect', 'watch'])
}
