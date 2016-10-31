var fs = require('fs');
var project = JSON.parse(fs.readFileSync('./project.json', 'utf8'));

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    uglify: {
      options: {
        mangle: false
      },
      vendor: {
        files: {
          [project.paths.scripts.dist.vendor.requirejs]: project.paths.scripts.vendor.requirejs,
          [project.paths.scripts.dist.vendor.jquery]: project.paths.scripts.vendor.jquery,
        }
      }
    },

    concat: {
      options: {
        sourceMap: true
      },
      scripts: {
        src: [
          project.paths.scripts.source.main,
          project.paths.scripts.dist.transpiled.files,
          project.paths.scripts.source.boot
        ],
        dest: project.paths.scripts.dist.bundle
      }
    },

    babel: {
      options: {
        babelrc: project.paths.transpiler.config,
        moduleIds: true,
        getModuleId: function(moduleName){
          return moduleName.replace(project.paths.scripts.source.root,'');
        }
      },
      compile: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: project.paths.scripts.source.root,
            src: [
              '**/*.js',
              '!' + project.paths.scripts.source.main,
              '!' + project.paths.scripts.source.boot
            ],
            dest: project.paths.scripts.dist.transpiled.root
          }
        ]
      }
    },

    karma: {
      unit: {
        configFile: project.paths.scripts.spec.config
      }
    },

    'http-server': {
      dev: {
        port: 9000,
        host: '0.0.0.0',
        showDir : true,
        autoIndex: true,
        ext: 'html',
        runInBackground: false
      }
    }

  });

  grunt.registerTask('build', [
    'uglify',
    'babel',
    'concat'
  ]);

  grunt.registerTask('start', [
    'build',
    'http-server'
  ]);

}
