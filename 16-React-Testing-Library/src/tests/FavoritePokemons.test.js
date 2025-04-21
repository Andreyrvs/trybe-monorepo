import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('Teste o componente <FavoritePokemons.js />', () => {
  const routeFavorites = '/favorites';
  test(`se é exibido na tela a msg "No favorite pokemon found",
  se não tiver pokemon favorito`, () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');
    const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(linkFavorite).toHaveAttribute('href', routeFavorites);
    expect(linkFavorite).toBeInTheDocument();
    userEvent.click(linkFavorite);
    history.push(routeFavorites);

    const notFoundMsg = screen.getByText(/No favorite pokemon found/i);
    expect(notFoundMsg).toBeInTheDocument();
  });

  test('se é exibido todos os cards de pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/');
    const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(linkFavorite).toHaveAttribute('href', routeFavorites);
    expect(linkFavorite).toBeInTheDocument();
    userEvent.click(linkFavorite);
    history.push(routeFavorites);

    const notFoundMsg = screen.getByText(/No favorite pokemon found/i);
    expect(notFoundMsg).toBeInTheDocument();

    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toHaveAttribute('href', '/');
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);
    history.push(/home/i);

    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkMoreDetails).toHaveAttribute('href', '/pokemons/25');
    expect(linkMoreDetails).toBeInTheDocument();
    userEvent.click(linkMoreDetails);
    history.push('/pokemons/25');

    const checkboxFavorite = screen.getByRole(
      'checkbox', { name: /pokémon favoritado\?/i },
    );
    expect(checkboxFavorite).toBeInTheDocument();

    userEvent.click(checkboxFavorite);
    const checkboxFavoriteTrue = screen.getByRole('checkbox', { checked: true });
    expect(checkboxFavoriteTrue).toBeInTheDocument();
    expect(checkboxFavoriteTrue).toBeTruthy();
  });
});
