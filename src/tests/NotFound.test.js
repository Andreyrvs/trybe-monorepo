import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('Teste o Componente "<NotFound.js />', () => {
  test(`Teste se página contém um heading h2
   com o texto Page requested not found 😭 (emoji: loudly crying face)`, () => {
    const { history } = renderWithRouter(<App />);
    history.push('/RuaTchurusbangoThurusbago');

    const tagH2 = screen.getByRole(
      'heading', { level: 2, name: /Page requested not found/i },
    );
    expect(tagH2).toBeInTheDocument();
  });

  test('Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/RuaTchurusbangoThurusbago');

    const tagImg = screen.getByAltText(
      'Pikachu crying because the page requested was not found',
    );

    expect(tagImg).toBeInTheDocument();
    expect(tagImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
