import {DateTime, Interval} from "luxon";

export const removeProtocol = url => {
  const cleaned = url.replace(/(^\w+:|^)\/\//, '');
  return cleaned;
}

export const humanDuration = (startDate, endDate) => {
  const interval = Interval.fromDateTimes(DateTime.fromISO(startDate), DateTime.fromISO(endDate));
  const duration = interval.toDuration(['years', 'months']).toObject();
  let res = [];
  if (duration.years) {
    res.push(Math.round(Number.parseFloat(duration.years)) + " years");
  }
  if (duration.months) {
    res.push(Math.round(Number.parseFloat(duration.months)) + " months");
  }
  return res.join(', ');
}