var stylesheetsDir = 'assets/stylesheets';

module.exports = function (grunt) {
    "use strict";
    // env conditional configuration
    grunt.config('env', grunt.option('env') || process.env.GRUNT_ENV || 'development');
    grunt.config('production', grunt.config('env') === 'production');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    //     s3: {
    //         options: {
    //             key: 'AKIAILU7O2X5ZUUVNE2Q',
    //             secret: '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',
    //             access: 'public-read'
    //         },
    //         prod: {
    //             options: {
    //                 region: 'us-west-2',
    //                 bucket: 'dashboard.vusay.com',
    //                 headers: {
    //                     'Cache-Control': 'max-age=300' // This is a 5-minute timeout. We should up this when we're making fewer changes
    //                 }
    //             },
    //             upload: [{
    //                 src: 'build/**',
    //                 dest: '/',
    //                 rel: 'build/'
    //             }]
    //         },
    //         stage:{
    //             options: {
    //                 bucket: 'dashboard-staging.vusay.com',
    //                 headers: {
    //                     'Cache-Control': 'max-age=10'
    //                 }
    //             },
    //             upload: [{
    //                 verify: true,
    //                 src: 'build/**',
    //                 dest: '/',
    //                 rel: 'build/'
    //             }]
    //         }
    //     },
    //     less: {
    //         compile: {
    //             options: {
    //                 paths: [stylesheetsDir],
    //                 cleancss : grunt.config('production')
    //             },
    //             files: {
    //                 'public/css/styles.css': stylesheetsDir + '/index.less',
    //                 'public/css/error.css': stylesheetsDir + '/error.less'
    //             }
    //         }
    //     },
    //     watch: {
    //         livereload: {
    //             files: ["app/**/*"],
    //             options: {
    //                 livereload: 35730
    //             }
    //         },
    //         stylesheets: {
    //             files: [stylesheetsDir + '/**/*.less', stylesheetsDir + '/**/*.css'],
    //             tasks: ['less'],
    //             options: {
    //                 interrupt: true
    //             }
    //         }
    //     },
    //     browserify: {
    //         app: {
    //             options: {
    //                 debug: true,
    //                 watch: true,
    //                 transform: [hbsfy]
    //             },
    //             files: {
    //                 'src/app.js': ['app/bootstrap.js']
    //             }
    //         },
    //         test: {
    //             options: {
    //                 debug: true,
    //                 watch: true,
    //                 transform: [hbsfy, istanbul({
    //                                 ignore: [
    //                                     '**/node_modules/**',
    //                                     '**/app/test/**',
    //                                     '**/app/test.js',
    //                                     '**/app/templates/**',
    //                                     '**/public/**'
    //                                 ]
    //                             })]
    //             },
    //             files: {
    //                 'src/app.js': ['app/test.js','app/bootstrap.js']
    //             }
    //         }
    //     },
    //     concat: {
    //         'src/mergedAssets.js': [
    //             'assets/vendor/jquery-1.9.1.min.js',
    //             'assets/vendor/jquery-serialize-object.js',
    //             'assets/vendor/bootstrap-tab.js',
    //             'assets/vendor/*.js'
    //         ]
    //     },
    //     uglify: {
    //         options: {
    //             compress: {
    //                 drop_console: true
    //             }
    //         },
    //         prod: {
    //             files: {
    //                 'build/app.js': ['src/app.js']
    //             }
    //         }
    //     },
    //     connect: { // local server with livereload support
    //         all: {
    //             options: {
    //                 port: 4040,
    //                 base: ['assets', 'src', 'public'],
    //                 livereload: 35730
    //             }
    //         }
    //     },
    //     clean: ["build"],
    //     copy: {
    //         main: {
    //             files: [
    //                 {expand: false, src: ['public/index.html'], dest: 'build/index.html'},
    //                 {expand: false, src: ['src/mergedAssets.js'], dest: 'build/mergedAssets.js'},
    //                 {expand: true, cwd: 'public/', src: ['**'], dest: 'build/'}
    //             ]
    //         }
    //     },
    //     jslint: {
    //         client: {
    //             src: [
    //                 'app/**/*.js'
    //             ],
    //             exclude: [
    //                 'app/test.js',
    //                 'app/test/**',
    //                 'app/lib/vendors/**/*.js'
    //             ],
    //             directives: {
    //                 browserify: true,
    //                 browser: true,
    //                 globals: {
    //                     "define": false,
    //                     "module": false,
    //                     "require": false,
    //                     "console": false
    //                 },
    //                 nomen: true,
    //                 todo: true,
    //                 unparam: true,
    //                 plusplus: true,
    //                 vars: true
    //             },
    //             options: {
    //                 edition: 'latest',
    //                 log: 'jslint/result.log',
    //                 junit: 'jslint/client-junit.xml',
    //                 errorsOnly: false,
    //                 failOnError: true
    //             }
    //         }
    //     }
    });

    // grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-contrib-handlebars');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-browserify');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-s3');
    // grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-jslint');

    // grunt.registerTask('compile', ['clean', 'less','browserify:app', 'concat', 'uglify', 'copy']);
    // grunt.registerTask('compile:dev', ['less','browserify:app']);
    // grunt.registerTask('compile:test', ['less','browserify:test']);
    // grunt.registerTask('deploy', ['compile', 's3:prod']); // Deploy to production
    // grunt.registerTask('stage', ['compile', 's3:stage']); // Deploy to staging
    // grunt.registerTask('default', ['compile']);
    // grunt.registerTask('server', ['compile:dev','concat','connect','watch']);
    // grunt.registerTask('test', ['compile:test','concat']);
};