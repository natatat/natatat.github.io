var stylesheetsDir = 'assets/stylesheets';

module.exports = function (grunt) {
    "use strict";
    // env conditional configuration
    grunt.config('env', grunt.option('env') || process.env.GRUNT_ENV || 'development');
    grunt.config('production', grunt.config('env') === 'production');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                options: {
                    paths: [stylesheetsDir],
                    cleancss: grunt.config('production')
                },
                files: {
                    'src/css/styles.css': stylesheetsDir + '/index.less',
                    'src/css/error.css': stylesheetsDir + '/error.less'
                }
            }
        },
        watch: {
            livereload: {
                files: ["app/**/*"],
                options: {
                    livereload: 35730
                }
            },
            stylesheets: {
                files: [stylesheetsDir + '/**/*.less', stylesheetsDir + '/**/*.css'],
                tasks: ['less'],
                options: {
                    interrupt: true
                }
            }
        },
        browserify: {
            app: {
                options: {
                    debug: true,
                    watch: true
                },
                files: {
                    'src/app.js': ['app/app.js']
                }
            }
        },
        concat: {
            'src/mergedAssets.js': [
                'assets/vendor/jquery-1.11.2.min.js',
                'assets/vendor/*.js'
            ]
        },
        uglify: {
            options: {
                compress: {
                    drop_console: false
                }
            },
            prod: {
                files: {
                    'build/app.js': ['src/app.js'],
                    'build/mergedAssets.js': ['src/mergedAssets.js']
                }
            }
        },
        connect: { // local server with livereload support
            all: {
                options: {
                    port: 9000,
                    base: ['assets', 'src', 'public'],
                    livereload: 35730
                }
            }
        },
        clean: ["src", "build"],
        copy: {
            main: {
                files: [
                    {expand: false, src: ['src/css/styles.css'], dest: 'build/css/styles.css'},
                    {expand: false, src: ['src/css/error.css'], dest: 'build/css/error.css'},
                    {expand: true, cwd: 'public/', src: ['**'], dest: 'build/'}
                ]
            }
        },
        jslint: {
            client: {
                src: [
                    'app/**/*.js'
                ],
                exclude: [],
                directives: {
                    browserify: true,
                    browser: true,
                    globals: {
                        "define": false,
                        "module": false,
                        "require": false,
                        "console": false
                    },
                    nomen: true,
                    todo: true,
                    unparam: true,
                    plusplus: true,
                    vars: true
                },
                options: {
                    edition: 'latest',
                    log: 'jslint/result.log',
                    junit: 'jslint/client-junit.xml',
                    errorsOnly: false,
                    failOnError: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-jslint');

    grunt.registerTask('compile:dev', ['less', 'browserify:app', 'concat']);
    grunt.registerTask('compile', ['clean', 'less', 'browserify:app', 'concat', 'uglify', 'copy']);
    grunt.registerTask('server', ['compile:dev', 'connect', 'watch']);
    grunt.registerTask('default', ['compile']);
};