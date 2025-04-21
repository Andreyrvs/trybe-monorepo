import React, { Component } from 'react';
import attrRect from '../../assets/Card/attrRect.svg';

export default class AttrImage extends Component {
  render() {
    return (
      <img
        src={ attrRect }
        className="-ml-12 z-10"
        alt="retangulo verde"
        height="29.92px"
        width="46.72px"
      />
    );
  }
}
