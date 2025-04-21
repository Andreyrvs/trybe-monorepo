import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Label extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <label
        htmlFor={ id }
        className="text-format"
      >
        {name}
      </label>
    );
  }
}

Label.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}.isRequire;
