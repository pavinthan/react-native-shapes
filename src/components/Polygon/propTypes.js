import PropTypes from 'prop-types';

const propTypes = {
  sideLength: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default propTypes;
