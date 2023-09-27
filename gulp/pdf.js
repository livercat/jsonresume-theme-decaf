import gulp from "gulp";
import path from "path";
import puppeteer from "puppeteer";
import tap from "gulp-tap";

export const htmlToPdf = async () =>
  new Promise((resolve, reject) => gulp.src("public/resume.html")
  .pipe(tap(async (file) => {
      const browser = await puppeteer.launch({headless: "new"});
      const page = await browser.newPage();
      await page.goto("file://" + file.path);
      await new Promise(r => setTimeout(r, 1000));
      // https://pptr.dev/api/puppeteer.pdfoptions
      await page.pdf({
        path: 'public/' + path.basename(file.basename, ".html") + ".pdf",
        format: 'Letter'
      });

      await browser.close();
      resolve();
    }))
    .on('error', reject))


gulp.task('pdf', htmlToPdf);

export default htmlToPdf;
