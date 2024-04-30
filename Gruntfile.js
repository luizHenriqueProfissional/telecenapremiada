const { task } = require("grunt");

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less:{
            development:{
                files:{
                    'dev/styles/main.css':'src/styles/main.less'
                }
            },
            production:{
                options: {
                    compress: true,
                },
                files:{
                    'dist/style/main.min.css': 'src/styles/main.less'
                }
            }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComents: true,
                    collapseWhitespace: true,
                },
                files:{
                    'prebuild/index.min.html':'src/index.html'
                }
            }
        },
        watch:{
            less:{
                files:['src/styles/**/*.less'],
                tasks:['less:development']
            }
        },
        uglify:{
            target:{
                files:{
                    'dist/scripts/index.min.js':'src/scripts/index.js'
                }
            }
        },
        replace:{
            dev: {
                options:{
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement:'./styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement:'../src/scripts/index.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src:['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options:{
                    patterns: [{
                        match: 'ENDERECO_DO_CSS',
                        replacement:'./styles/main.min.css'
                    },
                    {
                        match: 'ENDERECO_DO_JS',
                        replacement:'./scripts/index.min.js'
                    }
                ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src:['prebuild/index.min.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        clean: ['prebuild']
    })
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    grunt.registerTask('default'['watch']);
    grunt.registerTask('build',['less:development','less:production','uglify','htmlmin','replace:dist','clean'])
}