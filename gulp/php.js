/**
 * Created by gregrjacobs on 2016-12-27.
 */
var gulp = require('gulp');
var	php = require('gulp-connect-php');

gulp.task('php', function() {
	php.server({ base: 'server', port: 8010, open: false});
});