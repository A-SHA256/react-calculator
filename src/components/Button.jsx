import PropTypes from 'prop-types';

const Button = ({ text, className, clickHandler }) => {
  return (
    <button onClick={clickHandler} className={className}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;