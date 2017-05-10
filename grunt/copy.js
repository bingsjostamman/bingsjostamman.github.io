/**
 *
 * Copy minified CSS to Jekyll
 *
 */


module.exports = {

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

};
