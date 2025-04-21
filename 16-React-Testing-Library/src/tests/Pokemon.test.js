import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('Teste o componente <Pokemon.js />', () => {
  describe('Teste Se é renderizado um card com as informações de determinado pokémon.',
    () => {
      test('O nome correto do Pokémon deve ser mostrado na tela', () => {
        renderWithRouter(<App />);
        const pokemonName = screen.getByText(/pikachu/i);
        expect(pokemonName).toBeInTheDocument();
      });
      test('O tipo correto do pokémon deve ser mostrado na tela.', () => {
        renderWithRouter(<App />);

        const pokemonType = screen.getByTestId('pokemon-type');
        expect(pokemonType).toHaveTextContent('Electric');
        expect(pokemonType).toBeInTheDocument();
      });
      test('O peso médio do pokémon deve ser exibido ', () => {
        renderWithRouter(<App />);
        const pokemonAverage = screen.getByTestId('pokemon-weight');
        expect(pokemonAverage).toHaveTextContent('Average weight: 6.0 kg');
      });
      test('A imagem do Pokémon deve ser exibida. ', () => {
        renderWithRouter(<App />);
        const srcPicachu = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
        const img = screen.getByRole('img', { name: /pikachu sprite/i });
        expect(img.src).toBe(srcPicachu);
        expect(img.alt).toBe('Pikachu sprite');
      });
      test('O card do Pokémon indicado na Pokédex contém um link de navegação ', () => {
        const { history } = renderWithRouter(<App />);
        const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
        expect(linkMoreDetails).toBeInTheDocument();
        userEvent.click(linkMoreDetails);
        expect(history.location.pathname).toBe('/pokemons/25');
      });
      test('ao clicar no link de navegação do Pokémon,', () => {
        const { history } = renderWithRouter(<App />);
        const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
        expect(linkMoreDetails).toBeInTheDocument();
        userEvent.click(linkMoreDetails);
        expect(history.location.pathname).toBe('/pokemons/25');
        const pikachuDetails = screen.getByRole('heading', { level: 2,
          name: /pikachu details/i });
        expect(pikachuDetails).toBeInTheDocument();
      });
      test('existe um ícone de estrela nos Pokémons favoritados.', () => {
        renderWithRouter(<App />);
        const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
        expect(linkMoreDetails).toBeInTheDocument();
        userEvent.click(linkMoreDetails);
        const labelText = screen.getByLabelText(/pokémon favoritado\?/i);
        userEvent.click(labelText);
        const labelStar = screen.getByRole('img', {
          name: /Pikachu is marked as favorite/i });
        expect(labelStar).toBeInTheDocument();
        expect(labelStar.src).toContain('/star-icon.svg');
      });
    });
});
