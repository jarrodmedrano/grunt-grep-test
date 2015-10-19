
module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.loadNpmTasks('grunt-grep');


    grunt.initConfig({
        grep: {
            production: {
                files: {
                    'tmp/boot.css': ['src/winjs.less'], //dest file with lines matching pattern excluded: src files
                    'tmp/styles': ['winjs/src/less/**/*.less'] //src could be presented as a wildcard, new files with corresponding names will be created in the dest folder
                },
                options: {
                    pattern: '_win-type-body();' //your pattern that will be excluded from file
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/main.css": "src/main.less" // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['src/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', ['grep', 'less', 'watch']);
};