/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    src: ['**/*.css', '**/*.js', '**/*.html'],
    watch: {
      html_js_css: {
        files: '<%= src %>',
        options: {
          livereload: true
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['watch:html_js_css']);
};
