import gulp from 'gulp';
import cssImport from 'gulp-cssimport';
import gulpSass from 'gulp-sass';
import * as sassCompiler from 'sass'
import plumber from "gulp-plumber";

const sass = gulpSass(sassCompiler);

export const styles = async () => {
  return new Promise((resolve, reject) => gulp.src('app/styles/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssImport())
    .pipe(gulp.dest('public/styles'))
    .on('finish', resolve)
    .on('error', reject))
}

gulp.task('styles', styles);

export default styles;
