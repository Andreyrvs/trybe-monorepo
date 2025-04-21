import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  test('O 1° link possui o texto "Home" e se redeniza a página inicial no URL "/"',
    () => {
      const { history } = renderWithRouter(<App />);
      const linkHome = screen.getByRole('link', { name: 'Home' });
      expect(linkHome).toBeInTheDocument();

      userEvent.click(linkHome);
      const { pathname } = history.location;
      expect(pathname).toBe('/');
    });
  test('O 2° link possui o texto "About" e se a página é redirecionado para "/about"',
    () => {
      const { history } = renderWithRouter(<App />);
      const linkAbout = screen.getByRole('link', { name: 'About' });
      expect(linkAbout).toBeInTheDocument();

      userEvent.click(linkAbout);
      const { pathname } = history.location;
      expect(pathname).toBe('/about');
    });
  test('O 3° link possui o texto "About" e se a página é redirecionado para "/favorites"',
    () => {
      const { history } = renderWithRouter(<App />);
      const linkFavorites = screen.getByRole('link', { name: 'Favorite Pokémons' });
      expect(linkFavorites).toBeInTheDocument();

      userEvent.click(linkFavorites);
      const { pathname } = history.location;
      expect(pathname).toBe('/favorites');
    });
  test('se é redirecionada para página "Not Found" ao entrar em uma URL Desconhecida',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/pagina-que-nao-existe');
      const notFound = screen.getByRole(
        'heading',
        { level: 2 },
        { name: 'Page requested not found' },
      );
      expect(notFound).toBeInTheDocument();
    });
});
