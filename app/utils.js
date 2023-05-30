//  Rename this to gulp-utils

import {DateTime} from "luxon";

export const formatDate = date => DateTime.fromFormat(date, 'MM/YYYY');

export const removeProtocol = url => {
  const cleaned = url.replace(/(^\w+:|^)\/\//, '');
  console.log(`cleaning protocol from URL: ${cleaned}`)
  return cleaned
}

export const groupLangByFluency = (languages) => {
  return languages.reduce((result, lang) => {
    const group = lang.fluency || lang.level;
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(lang);

    if (result === -1) {
      throw('Error with fluency mappings');
    }
    return result;
  }, {});
}

export const SKILL_RANK_FLUENCY_MAPPING = ['Legacy', 'Adept', 'Experimenting', 'Advanced', 'Expert']
export const SKILL_COLOR_RANK_MAPPING = ['#5bc0eb', '#5bc0eb', '#8f2d56', '#c4412a', '#ffb400']
// export const SKILL_COLOR_RANK_MAPPING = ['#6c5b61', '#6c5b61', '#476873', '#436D66', '#325a53']

export const getFluencyRanking = fluencyLevel => SKILL_RANK_FLUENCY_MAPPING.map(
    (a) => a.toLowerCase()
  ).findIndex(
    (a) => fluencyLevel.toLowerCase() === a
  )

export const getStarsForLangFluency = fluencyLevel => {
  const starIdx = getFluencyRanking(fluencyLevel)
  return SKILL_RANK_FLUENCY_MAPPING.slice(0, starIdx + 1)
}

export const getFluencyColor = fluencyLevel => {
  const starIdx = getFluencyRanking(fluencyLevel)
  return SKILL_COLOR_RANK_MAPPING[starIdx]
}

export const staggerSort = (arr) => {
  //  WIP simple hack to optimize chip fit....
  return arr;
  const sorted = arr.sort((a, b) => {
    return a.length > b.length ? 1 : -1
  })
  const staggered = []

  for (let a= 0, b = sorted.length; a < b; a++ && b++) {
    staggered.push(sorted[a])
    staggered.push(sorted[b])
  }

  console.log(staggered);

  return staggered
}

// The ideal method would be to not even serve this data... but for now we will do this.
export const hidePrivateData = () => {
const privateData = document.querySelectorAll('.pii')
  privateData.forEach(el => {
    el.style.visibility = 'hidden';
  })
}
