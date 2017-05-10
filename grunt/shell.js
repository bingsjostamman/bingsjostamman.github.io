/**
 *
 * Execute shell commands to automate the building of patterns
 *
 */

module.exports = {

  patterns: {
    command: "php patterns/core/builder.php -g" // generate patterns to the public folder
  },

  weather: {
    command: "curl -s http://wttr.in/Bingsjo | head -7" // show current weather
  },

  jekyll: {
    command: "bundle exec jekyll build" // Build Jekyll site
  }

};
