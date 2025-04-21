import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { datatest, elementId, onInputChange, label, type, value, name } = this.props;
    return (
      <label
        htmlFor={ elementId }
        className="text-format flex gap-4"
      >
        <input
          className="checked:bg-green-600 checked:border-transparent"
          checked={ value }
          data-testid={ datatest }
          id={ elementId }
          name={ name }
          onChange={ onInputChange }
          type={ type }
        />
        { label }
      </label>
    );
  }
}

Checkbox.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  onInputChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.bool,
}.isRequired;

export default Checkbox;
