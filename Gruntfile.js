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
				'css/styles.css': 'scss/styles.scss',
			},
		}
	},

	//watch for changes to SCSS files.
	watch: {
		sass: {
			files: ['scss/**/*.scss'],
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
	grunt.registerTask('develop', ['sass','notify:sass','watch','notify:watch']);
	grunt.registerTask('watchit', ['watch']);
};