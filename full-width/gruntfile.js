module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uncss: {
      options: {
        report: 'gzip'
      },
      dist: {
        files: {
          // issue with uncss right now - https://github.com/addyosmani/grunt-uncss/issues/171
          // workaround - just comment all but one line, then run 'grunt', rinse, repeat
          //'uncompressed/css/minimal-clf-7.0.4.css': ['sample.html'],
          //'uncompressed/css/minimal-clf-7.0.4-bw.css': ['sample-bw.html']//,
          //'uncompressed/css/minimal-clf-7.0.4-gw.css': ['sample-gw.html']//,
          'uncompressed/css/minimal-clf-7.0.4-wg.css': ['sample-wg.html']
        }
      }
    },
    cssmin: {
      options: {
        report: 'gzip'
      },
      target: {
        files: {
          'release/css/minimal-clf-7.0.4.css': ['uncompressed/css/minimal-clf-7.0.4.css'],
          'release/css/minimal-clf-7.0.4-bw.css': ['uncompressed/css/minimal-clf-7.0.4-bw.css'],
          'release/css/minimal-clf-7.0.4-gw.css': ['uncompressed/css/minimal-clf-7.0.4-gw.css'],
          'release/css/minimal-clf-7.0.4-wg.css': ['uncompressed/css/minimal-clf-7.0.4-wg.css']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uncss','cssmin']);

};