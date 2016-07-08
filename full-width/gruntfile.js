module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
// -----------------------------------------------------------------------------
// WATCH TASKS
//
// -----------------------------------------------------------------------------    
    watch: {
      css: {
        files: 'release/css/*.css',
        options: {
          livereload: true,
        }
      }
    },
// -----------------------------------------------------------------------------
// CSSLINT TASKS
//
// -----------------------------------------------------------------------------    
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['uncompressed/css/*.css']
      },
      fullclf: {
        options: {
          import: false
        },
        src: ['original-css/*.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['uncompressed/css/*.css']
      }
    },
// -----------------------------------------------------------------------------
// LESSLINT TASKS
//
// -----------------------------------------------------------------------------    
    lesslint: {
      src: ['src/**/*.less']
      /*options: {
        csslint: {
          'known-properties': false
          csslintrc: '.csslintrc'
        }
      }*/
    },
// -----------------------------------------------------------------------------
// UNCSS TASKS
//
// -----------------------------------------------------------------------------
    uncss: {
      options: {
        report: 'gzip',
        // ignore these selectors so none are stripped by uncss regardless of which is in the markup
        ignore: ['#ubc7-okanagan-campus', '#ubc7-vancouver-campus', '#ubc7-centennial', '#ubc7-centennial a span', '.ubc7-single-element a', '#ubc7-global-utility button span.opened', '.open>.dropdown-menu', '.nav-collapse .open>.dropdown-menu','#ubc7-global-header', '#ubc7-global-header .row-fluid', '#ubc7-global-header ul', '#ubc7-global-header li', '#ubc7-global-header a', '#ubc7-ql-apom span', '#ubc7-ql-mobile span',  '.row-fluid .span8', '.row-fluid .offset2', '.row-fluid .offset2:first-child', '#ubc7-unit-menu .dropdown .btn-group.open button .ubc7-arrow', '#ubc7-unit-alternate-navigation .dropdown .btn-group.open button .ubc7-arrow', '#ubc7-global-menu #ubc7-global-header a', '#ubc7-global-menu.in #ubc7-global-header a', '#ubc7-global-header .row-fluid .offset2:first-child', '#ubc7-global-header .span8']
      },
      dist: {
        files: {
          'uncompressed/css/minimal-clf-7.0.4.css': ['build.html'],
          'uncompressed/css/minimal-clf-7.0.4-bw.css': ['build-bw.html'],
          'uncompressed/css/minimal-clf-7.0.4-gw.css': ['build-gw.html'],
          'uncompressed/css/minimal-clf-7.0.4-wg.css': ['build-wg.html']
        }
      }
    },
// -----------------------------------------------------------------------------
// CSSMIN TASKS
//
// -----------------------------------------------------------------------------
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
    },
// -----------------------------------------------------------------------------
// CRITICAL CSS TASKS (generate critical css for inlining)
//
// -----------------------------------------------------------------------------    
  	criticalcss: {
  		custom: {
  			options: {
  				url: "http://localhost:3000",
  				width: 1200,
  				height: 220,
  				outputfile: "critical/critical.css",
  				filename: "release/css/minimal-clf-7.0.4.css", // Using path.resolve( path.join( ... ) ) is a good idea here 
  				buffer: 800*1024,
  				ignoreConsole: false
  			}
  		}
  	},
// -----------------------------------------------------------------------------
// IMAGEMIN TASKS 
//
// -----------------------------------------------------------------------------     
    imagemin: {                          
        dynamic: {  
          options: {                       
            optimizationLevel: 3,
            svgoPlugins: [{ removeViewBox: false }]
          },
          files: [{
            expand: true,                   
            cwd: 'img/',                   
            src: ['**/*.{png,jpg,gif}'],   
            dest: 'release/img/'                  
          }]
        }
      },
// -----------------------------------------------------------------------------
// BROWSERSYNC TASKS
//
// -----------------------------------------------------------------------------    
    browserSync: {
        bsFiles: {
            src : 'release/css/*.css'
        },
        options: {
            server: {
                baseDir: "./",
                index: "output.html"
            }
        }
    }
    
  });
  

  // Load the plugins.
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-lesslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s) - we bundle the tasks here with easily memorable names. Default is run when nothing else it specified [ie. 'grunt' as opposed to 'grunt lint'].
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('optimize', ['uncss', 'cssmin']);
  grunt.registerTask('lint', ['csslint', 'lesslint']);

};