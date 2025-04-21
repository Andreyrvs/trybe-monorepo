import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../assets/Card/default-image.svg';
import imageCover from '../../assets/Card/imageCover.svg';
import cardRect57 from '../../assets/Card/card-rect-57.svg';
import superTrunfo from '../../assets/Card/super-trunfo.svg';
import CardPreview from './CardPreview';

const DESCRIPTION = 'É uma das três principais tecnologias da World Wide Web.';

class Card extends Component {
  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardName,
      cardRare,
      cardTrunfo,
    } = this.props;

    const handleName = cardName === '' ? 'JavaScript' : cardName;
    const handleDescription = cardDescription === '' ? DESCRIPTION : cardDescription;
    return (
      <section
        data-testid="name-card"
        className="card-format shadow-32 w-358 h-534 rounded-lg"
      >
        <section
          className="flex flex-col w-338 h-514 rounded-lg bg-secondary-green"
        >
          <section
            className="flex flex-col items-center mt-2"
          >
            <p
              className="
              z-50
              p-2
              flex-wrap
              absolute
            text-white
              font-epi
              text-2xl
              font-bold
              "
            >
              {handleName}
            </p>
            <img
              className="absolute z-0"
              src={ imageCover }
              alt="retangulo verde"
              width="308.53px"
              height="38.93px"
            />
            <section className="flex flex-col space-y-40 ">
              <img
                alt={ cardName }
                data-testid="image-card"
                src={ cardImage === '' ? defaultImage : cardImage }
                height="270.57px"
                width="308.53px"
                className="object-fill min-h-64 min-w-76"
              />
              { cardTrunfo
              && (
                <img
                  data-testid="trunfo-card"
                  src={ superTrunfo }
                  alt="super trunfo logo"
                  className="absolute self-end"
                  height="69.49px"
                  width="116.04px"
                />
              ) }

            </section>
          </section>
          <section className="flex flex-col items-center">
            <section>
              <p
                data-testid="description-card"
                className="
              text-white
                font-epi
                font-light
                text-xs
                leading-3
                transform -skew-y-6"
              >
                { handleDescription }
              </p>
            </section>
            <img className="mt-5" src={ cardRect57 } alt="bloco branco" />
            <CardPreview
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </section>

        </section>
      </section>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequire;

export default Card;
