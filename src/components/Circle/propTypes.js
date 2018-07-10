import PropTypes from 'prop-types';

const propTypes = {
  radius: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default propTypes;
