import PropTypes from 'prop-types';
import './Display.css';

const Display = ({result, className}) => {
  return (
    <div className={className}>
      {result}
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Display;