/*******************************************************************************
 * Filename     :     Gruntfile.js
 * Author       :     Juju
 * Description  :     Grunt preprocessor
 ******************************************************************************/

module.exports = function(grunt) {

/*****************************************************************************
* Configuration
****************************************************************************/
var config = {
 pkg: grunt.file.readJSON('package.json'),
 path: grunt.file.readJSON('config/paths.json'),
};

    grunt.initConfig({
        // config: config,
        paths: {
            src: {
                js: 'app/assets/js/**/*.js',
                scss: 'app/assets/scss/**/*.scss'
            },
            dest: {
                js: 'app/assets/js/main.js',
                dist: 'app/assets/dist/all.min.js',
                css: 'app/assets/css/all.css'
            }
        },
        uglify: {
            options: {
                compress: true
            },
            build: {
                src: '<%= paths.src.js %>',
                //dest: '<%= paths.dest.js %>',
                dest: '<%= paths.dest.dist %>'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'app/assets/css/master.css': 'app/assets/scss/master.scss'
                }
            }
        },
        grunticon: {
            myIcons: {
                files: [{
                    expand: true,
                    cwd: 'app/assets/icons/source',
                    src: ['*.svg', '*.png'],
                    dest: "app/assets/icons/dest"
                }],
                options: {
                }
            }
        },
        watch: {
            options: {
                reload: true,
            },
            javascript: {
                files: ['app/assets/dist/**','app/assets/js/**'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            sass: {
                files: ['app/assets/css/**','app/assets/scss/**'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    // Load the plugin that provides the tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-grunticon');

    // 4. Task Runner - Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch','sass','uglify', 'grunticon:myIcons']);
};
