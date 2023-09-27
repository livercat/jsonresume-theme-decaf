import gulp from 'gulp';
import clean from "./clean.js";
import styles from "./styles.js";
import typscript from "./typescript.js";
import resume from "./resume.js";
import pdf from "./pdf.js";
export const build = gulp.series(clean, gulp.parallel(styles, typscript, gulp.series(resume, pdf)));

gulp.task('build', build);
export default build;
