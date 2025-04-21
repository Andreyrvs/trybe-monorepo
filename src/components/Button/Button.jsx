import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { datatest, value, onSaveButtonClick, type, text, isGreen } = this.props;
    const presetRed = 'hover:bg-secondRed focus:ring-red-500 bg-primaryRed';
    const presetGreen = 'hover:bg-green-600 focus:ring-green-500 bg-primarText';
    const handleColor = isGreen ? presetGreen : presetRed;
    return (
      <button
        className={ `
          bg-primarText
          w-28
          h-10
          rounded-sm
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-opacity-50
          ${handleColor}
          ` }
        data-testid={ datatest }
        disabled={ value }
        onClick={ onSaveButtonClick }
        type={ type === 'button' ? 'button' : 'submit' }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.bool,
  onSaveButtonClick: PropTypes.func,
  type: PropTypes.string,
  isGreen: PropTypes.bool,
}.isRequired;

export default Button;
