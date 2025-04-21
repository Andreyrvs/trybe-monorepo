import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const {
      datatest,
      elementId,
      onInputChange,
      value,
      name,
      classe,
    } = this.props;
    return (
      <textarea
        className={ classe }
        data-testid={ datatest }
        id={ elementId }
        name={ name }
        onChange={ onInputChange }
        value={ value }
        placeholder="Descreva sua carta..."
      />
    );
  }
}

TextArea.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  onInputChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
}.isRequire;

export default TextArea;
