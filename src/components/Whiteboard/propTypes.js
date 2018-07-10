import PropTypes from 'prop-types';

const propTypes = {
  shape: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  measurements: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired,
};

export default propTypes;
