import P from 'prop-types';

import './styles.css';

export const Button = ({ text, onclick, disabled = false }) => (
  <button className="button" onClick={onclick} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onclick: P.func.isRequired,
  disabled: P.bool,
};
