/**
 *
 * Concatenate js files from each folder to corresponding files
 *
 */



module.exports = {

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

};
