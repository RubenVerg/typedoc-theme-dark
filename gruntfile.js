const sass = require('sass')

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ts: {
      themeDefault: {
        tsconfig: './tsconfig.json',
        options: {
          // Required because of https://github.com/TypeStrong/grunt-ts/issues/432
          // Wouldn't be needed if lunr fixed https://github.com/olivernn/lunr.js/issues/324
          additionalFlags: '--alwaysStrict false',
        },
      },
    },
    uglify: {
      themeDefault: {
        options: {
          mangle: false,
        },
        files: {
          'dist/dark/assets/js/main.js': [
            'node_modules/lunr/lunr.min.js',
            'src/default/assets/js/main.js',
          ],
        },
      },
    },
    sass: {
      options: {
        implementation: sass,
        style: 'compact',
        unixNewlines: true,
      },
      themeDefault: {
        files: [
          {
            expand: true,
            cwd: 'src/default/assets/css',
            src: '**/*.sass',
            dest: 'dist/dark/assets/css',
            ext: '.css',
          },
        ],
      },
    },
    autoprefixer: {
      options: {
        cascade: false,
      },
      themeDefault: {
        expand: true,
        src: 'dist/**/*.css',
        dest: './',
      },
    },
    copy: {
      plugin: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['*.js'],
            dest: 'dist',
          },
        ],
      },
      themeDefault: {
        files: [
          {
            expand: true,
            cwd: 'src/default',
            src: ['**/*.hbs', '**/*.png'],
            dest: 'dist/dark',
          },
        ],
      },
    },
    watch: {
      js: {
        files: ['src/default/assets/js/src/**/*.ts'],
        tasks: ['js'],
      },
      css: {
        files: ['src/default/assets/css/**/*'],
        tasks: ['css'],
      },
      default: {
        files: ['src/default/**/*.hbs'],
        tasks: ['copy', 'string-replace'],
      },
    },
  })

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-string-replace')
  grunt.loadNpmTasks('grunt-autoprefixer')
  grunt.loadNpmTasks('grunt-ts')

  grunt.registerTask('css', ['sass', 'autoprefixer'])
  grunt.registerTask('js', ['ts:themeDefault', 'uglify'])
  grunt.registerTask('default', ['copy', 'css', 'js'])
}
