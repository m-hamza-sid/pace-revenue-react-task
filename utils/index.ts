import { Config } from '../config';

/**
 * Gives back marker intervals with "1" as starting index.
 *
 * @param config
 * */
export function createIntervals(config: Config) {
  return () => {
    const oIntervals = [...Array(config.get('VIEW_TOTAL_DURATION') / config.get('VIEW_INTERVAL_MARKER')).keys()];
    return [...oIntervals, oIntervals[config.get('VIEW_TOTAL_DURATION') / config.get('VIEW_INTERVAL_MARKER') - 1] + 1];
  };
}

/**
 * Gives the formatted number with "0" prefix e.g. 9 -> 09.
 *
 * @param num
 * */
export function formatNumber(num: number) {
  return num.toLocaleString(navigator.languages[0], { minimumIntegerDigits: 2, useGrouping: false });
}

/**
 * Gives the human-readable formatted time given the minutes elapsed since midnight.
 *
 * @param min
 * */
export function getTime(min: number) {
  const e = new Date(0);
  e.setMinutes(min);

  return `${formatNumber(e.getUTCHours())}:${formatNumber(e.getUTCMinutes())}`;
}
