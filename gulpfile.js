import gulp from 'gulp'
import browserSync from 'browser-sync';
import tasks from './gulp/index.js';

const bs = browserSync.create("resume");


const reload = done => {
  bs.reload();
  done();
}

const watch = () => {
  gulp.watch('app/styles/**/*.scss', gulp.series(tasks.styles, gulp.parallel(tasks.pdf, reload)));
  gulp.watch(
    [
      'app/views/**/*.pug',
      'resume.json',
      'app/pug_utils.js'
    ],
    gulp.series(tasks.resume, tasks.pdf, reload)
  );
  gulp.watch('app/**/*.ts', gulp.series(tasks.typescript, reload));
};

// @ts-ignore
const serve = (done) => {
  bs.init({
    server: './public',
    index: 'resume.html'
  });
  done()
}

const dev = gulp.series(tasks.build, serve, watch);

gulp.task('default', dev);
gulp.task('dev', dev);
