import fs from 'fs'
import pug from 'pug';
import { formatDate } from './app/pug_utils.js';

let resumeTemplate = fs.readFileSync('app/views/index.pug', 'utf-8');

const pugOptions = {
  filename: 'app/views/resume.pug'
};

// I want this to run the gulp task instead, that will generate the 'stuff' for the
// resume-cli backwards compatibility
export const render = (resume, compiler = pug) => {

  // TODO: at some point i want to convert this pug to a basic react component.  The react.renderToHtml (or some such)
  // method will be used here.
  return compiler.compile(resumeTemplate, pugOptions)({
    resume: resume,
    formatDate: formatDate
  });
}

export default {
  render,
}