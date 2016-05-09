module.exports = function(grunt) {



  grunt.initConfig({

    /**
     *
     * Update packages automatically
     *
     */

    devUpdate: {
        main: {
            options: {
                updateType: 'force', // update outdated packages
                reportUpdated: false, //don't report up-to-date packages
                semver: true, //stay within semver when updating
                packages: {
                    devDependencies: true, //only check for devDependencies
                    dependencies: false
                },
                packageJson: null, //use matchdep default findup to locate package.json
                reportOnlyPkgs: [] //use updateType action on all packages
            }
        }
    },





    /**
     *
     * Execute shell commands to automate the building of patterns
     *
     */

    shell: {
      patterns: {
        command: "php patterns/core/builder.php -g" // generate patterns to the public folder
      },
      weather: {
        command: "curl -s http://wttr.in/Bingsjo | head -7" // show current weather
      },
      jekyll: {
        command: "bundle exec jekyll build" // Build Jekyll site
      }
    },





    /**
     *
     * Notify task progress to developer
     *
     */

     notify: {
       watch: {
         options: {
           title: 'Bingsjöstämman: Build task completed',
           message: 'Now watching for changes...'
         }
       }
     },




    /**
     *
     * Compile Sass to CSS
     *
     */

    sass: {

      styles: {
        options: {
          sourceMap: 'none',
          outputStyle: 'expanded',
          lineComments: false,
          debugInfo: false,
          noCache: true
        },

        files: [{
          expand: true,
          cwd: 'patterns/source/css/scss',
          src: ['*.scss'],
          dest: 'patterns/source/css',
          ext: '.css'
        }]
      }
    },





    /**
     *
     * Pack identical media queries together into single media query rule
     *
     */

    css_mqpacker: {
      options: {
        map: false,
        sort: true
      },
      main: {
        cwd: 'patterns/source/css',
        dest: 'patterns/source/css',
        expand: true,
        src: ["**/*.css"]
      }
    },





    /**
     *
     * Process CSS with PostCSS plugins
     *
     */

    postcss: {
      styles: {
        options: {
          map: false, // inline sourcemaps

          processors: [
            require('postcss-discard-duplicates'), // removes duplicate rules
            require('postcss-merge-rules'), // merge adjacent css rules
            require('pixrem')(), // add fallbacks for rem units
            require('autoprefixer')({browsers: ['last 3 versions', 'ie 8', 'ie 9', '> 1%']}) // add vendor prefixes
          ]
        },
        src: 'patterns/source/css/*.css'
      }
    },





    /**
     *
     * Beautify CSS
     *
     */

    csscomb: {
      styles: {
        files: {
          'patterns/source/css/styles.css': ['patterns/source/css/styles.css']
        }
      }
    },





    /**
     *
     * Minify CSS
     *
     */

    cssmin: {
      css:{
        files: {
          'patterns/source/css/styles.min.css': ['patterns/source/css/styles.css']
        }
      }
    },





    /**
     *
     * Concatenate js files from each folder to corresponding files
     *
     */

    concat: {
      vendor_libs: {
        src: [
          'js/vendor/libs/*.js'
        ],
        dest: 'js/vendor.libs.js'
      },
      vendor_modules: {
        src: [
          'js/vendor/modules/*.js'
        ],
        dest: 'js/vendor.modules.js'
      },
      vendor_polyfills: {
        src: [
          'js/vendor/polyfills/*.js'
        ],
        dest: 'js/vendor.polyfills.js'
      },
      modules: {
        src: [
          'js/modules/*.js'
        ],
        dest: 'js/modules.js'
      // },
      // maps: {
      //   src: [
      //     'source/js/maps/*.js'
      //   ],
      //   dest: 'source/js/maps.js'
      // },
      // maps_json: {
      //   src: [
      //     'source/js/maps/maps.google.branches.json'
      //   ],
      //   dest: 'source/js/maps.google.branches.json'
      }
    },





    /**
     *
     * Copy minified CSS to Jekyll
     *
     */

    copy: {
      patterns: {
        expand: true,
        cwd: 'patterns/source/css/',
        src: '**/*.css',
        dest: 'patterns/public/css'
      },
      publish: {
        expand: true,
        cwd: 'patterns/source/css/',
        src: '**/*.min.css',
        dest: 'css'
      }
    },





    /**
     *
     * Watch for changes
     *
     */

    watch: {

      // Watch to see if we change this gruntfile

      gruntfile: {
        files: ['gruntfile.js']
      },



      // Live Reload

      options: {
        livereload: true,
      },


      // Watch for changes in mustache and json files that build up patterns

      html: {
        files: [
          'patterns/source/_patterns/**/*.mustache',
          'patterns/source/_patterns/**/*.json',
          'patterns/source/_data/*.json',
          'patterns/source/css/fonts/**/*.*',          // Web fonts
          'patterns/source/css/gfx/**.*',              // CSS graphics files and sprites
          'patterns/source/**/*.png',                  // App icons
          'patterns/source/**/manifest.json',          // App icon manifest file
          'patterns/source/**/humans.txt',             // humans.txt http://humanstxt.org
          'patterns/source/**/*.ico',                  // Favicons
          'patterns/source/images/**.*',               // Sample images
        ],
        tasks: [ 'shell:patterns', 'notify:watch' ],
        options: {
          spawn: false
        }
      },


      // Compile to CSS when changes occur in Sass files

      sass: {
        files: [
          'patterns/source/css/scss/*.scss',
          'patterns/source/css/scss/_manifest.scss',
          'patterns/source/css/scss/**/*.scss'
         ],
        tasks: [
          'sass:styles',            // compile Sass to CSS
          'css_mqpacker',           // pack media queries
          'postcss:styles',         // post process CSS
          'csscomb',                // beautify css for easy reading/debugging
          'cssmin',                 // minify CSS
          // 'shell:patterns',     // generate Pattern Lab from mustache and JSON
//          'copy:patterns',

          'copy:publish',
          'shell:jekyll',


          'notify:watch' ],         // tell the world you're DONE!
        options: {
          spawn: false
        }
      },


      css: {
        files: ['patterns/public/css/*.css'],
        tasks: []
      },


      // Watch for changes in JS files

      scripts: {
        files: [ 'js/**/*.js' ],
        tasks: [
          'notify:scripts',
          // 'newer:concat',
          // 'notify:patterns',
          // 'shell:patterns',
          'notify:watch' ],
        options: {
          spawn: false,
        }
      }

    },

  });



  // Load basic dependencies
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-dev-update');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-newer');

  // Sass and CSS stuff
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks("css-mqpacker");
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // JS stuff
  grunt.loadNpmTasks('grunt-contrib-concat');



  /* default tasks */

  grunt.registerTask('default', ['build']);

  // Run updates and start watching for changes with 'grunt'
  grunt.registerTask('build', ['shell:weather', 'devUpdate', 'watch']);





  /* one shot tasks */

  // Run CSS pre- and postprocessing with 'grunt css'
  grunt.registerTask('css', ['sass:styles', 'css_mqpacker', 'postcss:styles', 'csscomb:styles', 'cssmin']);

  // Build patterns and style guide with 'grunt p'
  grunt.registerTask('p', ['shell:patterns']);

  // Build Jekyll site with 'grunt j'
  grunt.registerTask('j', ['shell:jekyll']);

  // Build Jekyll site using pattern assets with 'grunt jpub'
  grunt.registerTask('jpub', ['copy:publish', 'shell:jekyll']);

};
