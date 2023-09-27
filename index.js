import fs from 'fs'
import pug from 'pug';
import { formatDate } from './gulp/utils.js';

let resumeTemplate = fs.readFileSync('app/views/index.pug', 'utf-8');

const pugOptions = {
  filename: 'app/views/resume.pug'
};

export const render = (resume, compiler = pug) => {

  return compiler.compile(resumeTemplate, pugOptions)({
    resume: resume,
    formatDate: formatDate
  });
}

export default {
  render,
}