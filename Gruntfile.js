module.exports = function(grunt) {

  grunt.initConfig({
    //task configurations

    //1:1 coffee conversion
    // coffee: {
    //   compile: {
    //     files: {
    //       'compiled/js/test1.js': 'src/js/test1.coffee'
    //     }
    //   }
    // }

    //group coffee conversion
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/js',
          src: ['*.coffee'],
          dest: 'compiled/js',
          ext: '.js'
        }]
      }
    },

    //1:1 Sass conversion
    // sass: {
    //   dist: {
    //     files: {
    //       'compiled/css/test1.css': 'src/css/test1.scss'
    //     }
    //   }
    // }

    //group sass conversion
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.scss'],
          dest: 'compiled/css',
          ext: '.css'
        }]
      }
    },

    //1:1 haml conversion
    // haml: {
    //   dist: {
    //     files: {
    //       'compiled/templates/main.html': 'src/templates/main.haml'
    //     }
    //   }
    // }

    //group haml conversion
    haml: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.haml'],
          dest: 'compiled',
          ext: '.html'
        }]
      }
    },

    uglify: {
      options: {
        banner: '/*! Copyright (c) - <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      target_1: {
        files: {
          'www/js/application.min.js': ['compiled/js/*.js']
        }
      }
    },

    cssmin: {
      add_banner: {
        options: {
          banner: '/* Copyright (c) - <%= grunt.template.today("yyyy-mm-dd") */'
        },
        files: {
          'www/css/application.min.css': ['compiled/css/*.css']
        }
      }
    },

    copy: {
      haml: {
        expand: true,
        cwd: 'compiled',
        src: ['*.html'],
        dest: 'www'
      },
      html: {
        expand: true,
        cwd: 'src',
        src: ['*.html'],
        dest: 'www'
      },
      css: {
        expand: true,
        cwd: 'src/css',
        src: ['*.css'],
        dest: 'www/css'
      },
      js: {
        expand: true,
        cwd: 'src/js',
        src: ['*.js'],
        dest: 'www/js'
      }
    },

    watch: {
      sass: {
        files: ['src/css/*.scss'],
        tasks: ['sass']
      },
      coffee: {
        files: ['src/js/*.coffee'],
        tasks: ['coffee']
      },
      haml: {
        files: ['src/*.haml'],
        tasks: ['haml']
      },
      uglify: {
        files: ['compiled/js/*.js'],
        tasks: ['uglify']
      },
      cssmin: {
        files: ['compiled/css/*.css'],
        tasks: ['cssmin']
      },
      copy1: {
        files: ['src/**/*'],
        tasks: ['copy']
      },
      copy2: {
        files: ['compiled/**/*'],
        tasks: ['copy']
      },
      livereload: {
        options: { livereload: 9000 },
        files: ['www/**/*'],
      }
    }
  });
  
  //load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');


  //grunt task setting
  grunt.registerTask('default', ['coffee', 'sass', 'haml', 'uglify', 'cssmin', 'copy', 'watch']);

};

