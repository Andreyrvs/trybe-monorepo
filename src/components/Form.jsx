import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';
import Checkbox from './Checkbox/Checkbox';
import Input from './Input/Input';
import Select from './Select/Select';
import TextArea from './TextArea/TextArea';
import Label from './Label';
import imageLink from '../assets/imageLink.svg';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    const MAXIMUM_POINTS = 150;
    const handleTotalPoints = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    return (
      <div
        className="card-format
       "
      >
        <h1
          className="h1-card"
        >
          Adicione Nova Carta

        </h1>
        <form className="flex flex-col w-full gap-y-8">
          <section className="flex flex-col">
            <Label id="input-name" name="Nome" />
            <Input
              classe="input-main-under"
              datatest="name-input"
              onInputChange={ onInputChange }
              id="input-name"
              name="cardName"
              type="text"
              value={ cardName }
              placeholder="Melhor nome..."
            />
          </section>
          <section className="flex flex-col">
            <Label id="input-description" name="Descrição" />
            <TextArea
              classe="input-main-under h-20 placeholder-opacity-25"
              datatest="description-input"
              onInputChange={ onInputChange }
              id="input-description"
              name="cardDescription"
              value={ cardDescription }
            />
          </section>
          <section className="input-section">
            <Label id="input-attr01" name="Attr01" />
            <Input
              classe="input-main w-64"
              datatest="attr1-input"
              onInputChange={ onInputChange }
              id="input-attr01"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              placeholder="30"
            />
          </section>
          <section className="input-section">
            <Label id="input-attr02" name="Attr02" />
            <Input
              classe="input-main w-64"
              datatest="attr2-input"
              onInputChange={ onInputChange }
              id="input-attr02"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              placeholder="30"
            />
          </section>
          <section className="input-section">
            <Label id="input-attr03" name="Attr03" />
            <Input
              classe="input-main w-64"
              datatest="attr3-input"
              onInputChange={ onInputChange }
              id="input-attr03"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              placeholder="90"
            />
          </section>
          <section className="flex items-center gap-3">
            <Label id="input-image" name="Imagem" />
            <Input
              classe="input-main w-64"
              datatest="image-input"
              onInputChange={ onInputChange }
              id="input-image"
              name="cardImage"
              value={ cardImage }
              placeholder="https://minha-imagem.jpg"
            />
            <img
              className="-ml-14"
              src={ imageLink }
              alt="link"
              height="37px"
              width="46px"
            />
          </section>
          <section className="flex flex-col">
            <Label id="input-select" name="Raridade" />
            <Select
              classe="input-main-under h-10 bg-white"
              datatest="rare-input"
              onInputChange={ onInputChange }
              id="input-select"
              label="Raridade"
              name="cardRare"
              value={ cardRare }
            />
            <section className="flex justify-center text-format">
              { handleTotalPoints > MAXIMUM_POINTS
                ? (
                  <span className="text-red-500">
                    Total de Pontos =
                    {' '}
                    {handleTotalPoints}
                  </span>
                )
                : (
                  <span>
                    Total de Pontos =
                    {' '}
                    {handleTotalPoints}
                  </span>
                )}
            </section>
          </section>
          <section className="flex flex-row space-x-16 justify-start items-center ">

            { hasTrunfo
              ? (
                <p>Você já tem um Super Trunfo em seu baralho</p>)
              : (
                <Checkbox
                  datatest="trunfo-input"
                  onInputChange={ onInputChange }
                  label="Super Trybe Trunfo"
                  name="cardTrunfo"
                  type="checkbox"
                  value={ cardTrunfo }
                />
              )}
            <Button
              datatest="save-button"
              isGreen="true"
              onSaveButtonClick={ onSaveButtonClick }
              id="button-save"
              name="isSaveButtonDisabled"
              type="button"
              text="Salvar"
              value={ isSaveButtonDisabled }
            />
          </section>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequire;

export default Form;
