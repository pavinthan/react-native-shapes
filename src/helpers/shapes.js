import { strBetween } from './string';

/**
 * Find shape from string.
 * @param string
 */
export const findShape = string => {
  return (
    strBetween(string, 'draw an', 'with') ||
    strBetween(string, 'draw a', 'with')
  );
};

/**
 * Find measurements from string.
 * @param string
 */
export const findMeasurements = string => {
  const measurement =
    strBetween(string, 'with an', 'of') || strBetween(string, 'with a', 'of');
  if (!measurement) return '';
  return [
    measurement,
    strBetween(string, 'and an', 'of') || strBetween(string, 'and a', 'of'),
  ].filter(m => m);
};

/**
 * Find values for given measurements from string.
 * @param string
 * @param measurements
 */
export const findValues = (string, measurements) => {
  return measurements.map(measurement => {
    return parseFloat(strBetween(string, `${measurement} of`) || 0);
  });
};
