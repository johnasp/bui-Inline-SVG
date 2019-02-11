//https://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/

module.exports = function (grunt) {
    
 // measures the time each task takes
  require('time-grunt')(grunt);     

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        svgstore: {
            options: {
              prefix : 'bcars-icon-', 
              svg: { 
                  style: "display: none;"
              }
            },
            primary: {
                files: {
                    'bcars-icons/primary/defs/bcars-primary-defs.svg': ['bcars-icons/primary/svg/*.svg'],
                },
            },
            secondary: {
                files: {
                    'bcars-icons/secondary/defs/bcars-secondary-defs.svg': ['bcars-icons/secondary/svg/*.svg'],
                },
            },
          },

          "convert-svg-to-png": {
                primary16: {
                    options: {
                        size: {w: 16, h:16}
                    },
                    files: [{
                        expand: true,
                        cwd: "bcars-icons/primary/svg",
                        src: ["**/*.svg"],
                        dest: "bcars-icons/primary/png/16x16"
                    }]
                },
                primary32: {
                    options: {
                        size: {w: 32, h:32}
                    },
                    files: [{
                        expand: true,
                        cwd: "bcars-icons/primary/svg",
                        src: ["**/*.svg"],
                        dest: "bcars-icons/primary/png/32x32"
                    }]
                },
                secondary16: {
                    options: {
                        size: {w: 16, h:16}
                    },
                    files: [{
                        expand: true,
                        cwd: "bcars-icons/secondary/svg",
                        src: ["**/*.svg"],
                        dest: "bcars-icons/secondary/png/16x16"
                    }]
                },
                secondary32: {
                    options: {
                        size: {w: 32, h:32}
                    },
                    files: [{
                        expand: true,
                        cwd: "bcars-icons/secondary/svg",
                        src: ["**/*.svg"],
                        dest: "bcars-icons/secondary/png/32x32"
                    }]
                },
          },

        watch: {
            svg: {
                cwd: ['bcars-icons/'], 
                files: ['**/*.svg'],
                tasks: ['icons'],
                options: {
                    spawn: false,
                }
            },
        },
    });

    // 2. Load all Grunt tasks automatically 
    require('load-grunt-tasks')(grunt);

    // 3. Register tasks, default grunt task first

    grunt.registerTask(
        'default', [
                'watch'
            ]
    );
    grunt.registerTask('icons', ['svgstore', 'convert-svg-to-png', 'watch']);

};