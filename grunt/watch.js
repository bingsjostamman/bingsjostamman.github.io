/**
 *
 * Watch for changes
 *
 */


module.exports = {

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
//          'css_mqpacker',           // pack media queries
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

};
