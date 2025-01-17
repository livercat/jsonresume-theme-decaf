import gulp from 'gulp';
import fs from 'fs';
import gulpPug from 'gulp-pug';
import plumber from "gulp-plumber";
import * as utils from './utils.js';

export const getResumeData = (path) => {
  const file = fs.readFileSync(path, "utf8")
  return JSON.parse(file);
}

export const resume = async () => {
  const resumeData = getResumeData("resume.json");

  return new Promise((resolve, reject) => {
    gulp.src('./app/views/*.pug')
      .pipe(plumber(error => {
        console.log(error);
        reject(error)
      }))
      .pipe(
        gulpPug({
          locals: {
            resume: resumeData,
            ...utils
          },
          pretty: true,
          compileDebug: true,
          verbose: true
        })
      )
      .pipe(gulp.dest('public/'))
      .on('finish', async (...args) => {
        gulp.src('./app/images/*.*')
          .pipe(gulp.dest('./public/'));
        resolve(...args)
      })
      .on('error', reject);
  })
};
//  NOTE If we do PDF here that will delay the reload of the HTML, which is a bit undesirable
gulp.task('resume', resume);

export default resume
