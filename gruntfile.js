module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        files: {
            css : {
                src : [
                    'src/css/reset.scss',
                    'src/css/your-project-icons.scss',
                    'src/css/typography+colors.scss', 
                    'src/css/forms.scss', 
                    'src/css/grid.scss', 
                    'src/css/utils.scss', 
                    'src/css/components.scss', 
                    'src/css/layout+skin.scss'
                ],
                output : [
                    'buid/css/reset.css', 
                    'buid/css/your-project-icons.css',
                    'buid/css/typography+colors.css', 
                    'buid/css/forms.css', 
                    'buid/css/grid.css', 
                    'buid/css/utils.css', 
                    'buid/css/components.css', 
                    'buid/css/layout+skin.css'
                ],
            },
            html : [
                'src/*.html',
                'src/includes/*.html'
            ],
            docs : [
                'docs/*.html',
                'docs/*.css',
                'docs.*.js'
            ]
        },
        
        cssmin: 
        {
            combine: 
            {
                files: {
                    'build/css/<%= pkg.name %>.min.css' : '<%= files.css.output %>'
                }
            }
        },

        sass: {                              // Task 
            dist: {                            // Target 
                options: {                       // Target options 
                    style: 'expanded'
                },
                files: [{                         // Dictionary of files 
                    expand: true,
                    cwd: 'src/css/',
                    src: '*.scss',
                    dest: 'build/css/',
                    ext: '.css'
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 3 versions', 'Firefox ESR', 'Firefox 28', 'ie 9']
            },
            dist: {
                expand: true,
                flatten: true,
                cwd: 'build/css',
                src: ['*.css'],
                dest: 'build/css/'
            }
        },


        svgmin:
        {
            img:
            {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: '*.svg',
                    dest: 'build/img/'

                }]
            },
            icons:
            {
                files: [{
                    expand: true,
                    cwd: 'src/img/icons/',
                    src: '*.svg',
                    dest: 'build/img/icons/'
                }]
            }
        },

        webfont: {
            icons: {
                src: 'build/img/icons/*.svg',
                dest: 'build/fonts',
                destCss: 'build/css/',
                options: {
                    engine: 'node',
                    font: '<%= pkg.name %>-icons',
                    hashes: true,
                    syntax: 'bootstrap',
                    template: 'src/img/icons/icons-tmpl.css',
                    templateOptions: {
                        htmlDemoTemplate: 'src/img/icons/demoicons-tmpl.html',
                        destHtml: 'docs'
                    }
                }
            }
        },

        nunjucks: {
            options: {
                paths : 'src/'
            },
            render: {
                files:[{
                    expand: true,
                    flatten: true,
                    cwd: 'src/',
                    src: '*.html',
                    dest: 'build/',
                    ext: '.html'
                }]
            }
        },

        modernizr: {

            dist: {

                 // Path to save out the built file
                'dest' : 'build/js/modernizr-custom.js',
                'options' : [
                    'setClasses',
                    'addTest',
                    'html5printshiv',
                    'testProp',
                    'fnBind'
                ],
                // More settings go here
            }
        },

        watch: {
            options: {
                livereload: true,
            },              
            css : {
                files: 'src/css/*.scss',
                tasks : ['sass:dist']
            },
            html : {
                files : '<%= files.html %>',
                task : ['nunjucks']
            },
            docs : {
                files: '<%= files.docs %>'     
            }
        },
      
    });
    
    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-nunjucks-2-html');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Run plugins
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('buildcss', ['sass:dist', 'autoprefixer']);
    grunt.registerTask('icons', ['svgmin:icons','webfont:icons']);
    grunt.registerTask('init', ['nunjucks', 'buildcss', 'icons', 'modernizr']);
};