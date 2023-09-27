import {DateTime} from "luxon";

export const formatDate = date => DateTime.fromFormat(date, 'MM/YYYY');

export const removeProtocol = url => {
  const cleaned = url.replace(/(^\w+:|^)\/\//, '');
  console.log(`cleaning protocol from URL: ${cleaned}`)
  return cleaned
}