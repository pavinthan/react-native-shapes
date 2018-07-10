import { strBetween } from './string';

export const findShape = query => {
  return (
    strBetween(query, 'draw an', 'with') || strBetween(query, 'draw a', 'with')
  );
};

export const findMeasurements = query => {
  const measurement =
    strBetween(query, 'with an', 'of') || strBetween(query, 'with a', 'of');
  if (!measurement) return '';
  return [
    measurement,
    strBetween(query, 'and an', 'of') || strBetween(query, 'and a', 'of'),
  ].filter(m => m);
};

export const findValues = (query, measurements) => {
  return measurements.map(measurement => {
    return parseFloat(strBetween(query, `${measurement} of`) || 0);
  });
};
