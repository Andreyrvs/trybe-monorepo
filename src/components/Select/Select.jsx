import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      datatest,
      elementId,
      onInputChange,
      value,
      classe,
      name,
    } = this.props;
    return (
      <select
        className={ classe }
        data-testid={ datatest }
        id={ elementId }
        name={ name }
        onChange={ onInputChange }
        value={ value }
        placeholder="uma Opcao"
      >
        <option value="" disabled select>Seleciona uma opção</option>
        <option>normal</option>
        <option>raro</option>
        <option>muito raro</option>
      </select>
    );
  }
}

Select.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  onInputChange: PropTypes.func,
  value: PropTypes.string,
  classe: PropTypes.string,
  label: PropTypes.string,
}.isRequire;

export default Select;
