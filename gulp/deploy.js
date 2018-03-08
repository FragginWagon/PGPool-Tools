/*******************************************************************************
 * Description:
 *
 *   Gulp file to push changes to remote servers (eg: staging/production)
 *
 * Usage:
 *
 *   gulp deploy --target
 *
 * Examples:
 *
 *   gulp deploy --production   // push to production
 *   gulp deploy --staging      // push to staging
 *
 ******************************************************************************/
var gulp = require('gulp');

// var path = require('path');

// gulp-util - https://www.npmjs.com/package/gulp-util
var gutil = require('gulp-util');

// Minimist - https://www.npmjs.com/package/minimist
var argv = require('minimist')(process.argv);

// gulp-rsync - https://www.npmjs.com/package/gulp-rsync
var rsync = require('gulp-rsync');

// gulp-prompt - https://www.npmjs.com/package/gulp-prompt
var prompt = require('gulp-prompt');

// gulp-if - https://www.npmjs.com/package/gulp-if
var gulpif = require('gulp-if');

var conf = require('./conf');

gulp.task('deploy', ['build'], function () {
	
	// Dirs and Files to sync
	rsyncPaths = [conf.paths.dist + '/**/*.*', '.htaccess'];
	
	// Default options for rsync
	rsyncConf = {
		progress: true,
		incremental: true,
		relative: true,
		emptyDirectories: true,
		recursive: true,
		clean: true,
		exclude: []
	};
	
	rsyncConf.hostname = 'bw-webmain.server'; // hostname
	rsyncConf.username = 'root'; // ssh username
	rsyncConf.destination = '/var/www/html/pokedex.cloud'; // path where uploaded files go
	
	// // Staging
	// if (argv.staging) {
	//
	// 	rsyncConf.hostname = ''; // hostname
	// 	rsyncConf.username = ''; // ssh username
	// 	rsyncConf.destination = ''; // path where uploaded files go
	//
	// 	// Production
	// } else if (argv.production) {
	//
	// 	rsyncConf.hostname = ''; // hostname
	// 	rsyncConf.username = ''; // ssh username
	// 	rsyncConf.destination = ''; // path where uploaded files go
	//
	//
	// 	// Missing/Invalid Target
	// } else {
	// 	throwError('deploy', gutil.colors.red('Missing or invalid target'));
	// }
	
	
	// Use gulp-rsync to sync the files
	return gulp.src(rsyncPaths)
	.pipe(gulpif(
		argv.production,
		prompt.confirm({
			message: 'Heads Up! Are you SURE you want to push to PRODUCTION?',
			default: false
		})
	))
	.pipe(rsync(rsyncConf));
	
});


function throwError(taskName, msg) {
	throw new gutil.PluginError({
		plugin: taskName,
		message: msg
	});
}