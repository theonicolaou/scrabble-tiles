module.exports = function (grunt) {
// load all grunt tasks matching the `grunt-*` pattern
require('load-grunt-tasks')(grunt);

grunt.initConfig({
	//clean main compiled css file and minified version.
	clean: {
		css: ['css'],
		js: ['js'],
	},

	//Compile Foundation SCSS and custom styles SCSS files into CSS
	sass: {
		dist: {
			files: {
				'dist/css/scrabble.css': 'src/scss/styles.scss',
			},
		}
	},

	//watch for changes to SCSS files.
	watch: {
		sass: {
			files: ['src/scss/**/*.scss'],
			tasks: ['sass', 'notify:sass'],
			
			options: {
				livereload: 35729
			}
		},

		html: {
			files: ['*.html'],
			tasks: ['notify:html'],
			options: {
				livereload: 35729
			}
		}
	},

	connect: {
		dev: {
			options: {
				port: 8888,
				cwd: 'scrabble-tiles',
				livereload: 35729,
				open: {
					target: 'http://localhost:8888/src/scrabble-tiles-example.html'
				}
			}
		},
	},

	//configurations for OS X notifications, for each task.
	notify: {
		clean: {
			options: {
				title: "Clean",
				message: "Files cleaned",
				success: true,
				duration: 5
			}
		},

		sass: {
			options: {
				title: "SCSS Compilation",
				message: "SCSS compilation complete",
				success: true,
				duration: 5	
			}
		},

		html: {
			options: {
				title: "HTML file",
				message: "HTML file update",
				success: true,
				duration: 5
			}
		},
	},
});

	grunt.registerTask('cleanit', ['clean','notify:clean']);
	grunt.registerTask('develop', ['sass','notify:sass','connect:dev','watch','notify:watch']);
	grunt.registerTask('watchit', ['watch']);
};