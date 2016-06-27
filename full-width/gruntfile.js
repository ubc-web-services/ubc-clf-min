module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uncss: {
      options: {
        report: 'gzip',
        // ignore these selectors so none are stripped by uncss regardless of which is in the markup
        ignore: ['#ubc7-okanagan-campus', '#ubc7-vancouver-campus', '.ubc7-single-element']
      },
      dist: {
        files: {
          // issue with uncss right now - https://github.com/addyosmani/grunt-uncss/issues/171
          // workaround - just comment all but one line, then run 'grunt', rinse, repeat
          //'uncompressed/css/minimal-clf-7.0.4.css': ['build.html']//,
          //'uncompressed/css/minimal-clf-7.0.4-bw.css': ['build-bw.html']//,
          //'uncompressed/css/minimal-clf-7.0.4-gw.css': ['build-gw.html']//,
          'uncompressed/css/minimal-clf-7.0.4-wg.css': ['build-wg.html']
        }
      }
    },
    cssmin: {
      options: {
        report: 'gzip'
      },
      target: {
        files: {
          //'release/css/minimal-clf-7.0.4.css': ['uncompressed/css/minimal-clf-7.0.4.css']//,
          //'release/css/minimal-clf-7.0.4-bw.css': ['uncompressed/css/minimal-clf-7.0.4-bw.css']//,
          //'release/css/minimal-clf-7.0.4-gw.css': ['uncompressed/css/minimal-clf-7.0.4-gw.css']//,
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