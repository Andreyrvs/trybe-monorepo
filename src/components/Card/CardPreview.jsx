import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AttrImage from './AttrImage';

export default class CardPreview extends Component {
  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
    } = this.props;
    const DOTS = '....................................';
    const attrFormated = (number) => `Attr${String(number)}${DOTS}`;
    return (
      <section className="-mt-36 flex flex-col gap-2">
        <section className="attr">
          <span>
            {attrFormated('01')}
          </span>
          <section className="flex flex-row gap-2 text-center">
            <p
              data-testid="attr2-card"
              className="attr-text"
            >
              { cardAttr1 }
            </p>
            <AttrImage />
          </section>
        </section>
        <section className="attr">
          <span>
            {attrFormated('02')}
          </span>
          <section className="flex flex-row gap-2 text-center">
            <p
              data-testid="attr2-card"
              className="attr-text "
            >
              { cardAttr2 }
            </p>
            <AttrImage />
          </section>
        </section>
        <section className="attr">
          <span>
            {attrFormated('03')}
          </span>
          <section className="flex flex-row gap-2 text-center">
            <p
              data-testid="attr2-card"
              className="attr-text"
            >
              { cardAttr3 }
            </p>
            <AttrImage />
          </section>
        </section>
        <p data-testid="rare-card">{ cardRare }</p>

      </section>
    );
  }
}

CardPreview.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardRare: PropTypes.string,
}.isRequire;
