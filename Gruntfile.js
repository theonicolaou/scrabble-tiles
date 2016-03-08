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
				// 'css/foundation.css': 'scss/vendor/styles.scss',
				'css/styles.css': 'scss/styles.scss',
			},
		}
	},

	// //Minify css in /css folder
	// cssmin: {
	// 	target: {
	// 		files: [{
	// 			expand: true,
	// 			cwd: 'css',
	// 			src: ['*.css', '!*.min.css'],
	// 			dest: 'css',
	// 			ext: '.min.css'
	// 		}],
	// 		tasks: ['notify:optimise'],
	// 	}
	// },

	// //Minify js in /js folder
	// uglify: {
	// 	my_target: {
	// 		files: [{
	// 			expand: true,
	// 			cwd: 'js/vendor',
	// 			src: ['*.js', '!*.min.js'],
	// 			dest: 'js/vendor',
	// 			ext: '.min.js'
	// 		}],
	// 		tasks: ['notify:optimise'],
	// 	}
	// },

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

	connect: {
		dev: {
			options: {
				port: 8888,
				hostname: 'localhost',
				livereload: 35729,
				open: true,
				cwd: '/theoandnicolawedding',
			},
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
	grunt.registerTask('optimise', ['clean','notify:clean','cssmin','uglify','notify:optimise']);
	grunt.registerTask('serve', ['connect:dev']);
	grunt.registerTask('watchit', ['watch']);
};