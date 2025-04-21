import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  test('Se página contém um heading h2 com o texto Encountered pokémons.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const tagH2 = screen.getByRole(
      'heading', { level: 2, name: /encountered pokémons/i },
    );

    expect(tagH2).toBeInTheDocument();
  });
  test('Se é exibido o próximo Pokémon da lista quando o botão Próximo pokémon é clicado',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/');

      const btnNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
      expect(btnNextPokemon).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonCharmander = screen.getByText(/Charmander/i);
      expect(nextPokemonCharmander).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonCaterpie = screen.getByText(/Caterpie/i);
      expect(nextPokemonCaterpie).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonEkans = screen.getByText(/Ekans/i);
      expect(nextPokemonEkans).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonAlakazam = screen.getByText(/Alakazam/i);
      expect(nextPokemonAlakazam).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonMew = screen.getByText(/Mew/i);
      expect(nextPokemonMew).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonRapidash = screen.getByText(/Rapidash/i);
      expect(nextPokemonRapidash).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonSnorlax = screen.getByText(/Snorlax/i);
      expect(nextPokemonSnorlax).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonDragonair = screen.getByText(/Dragonair/i);
      expect(nextPokemonDragonair).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonPikachu = screen.getByText(/Pikachu/i);
      expect(nextPokemonPikachu).toBeInTheDocument();
    });

  test('Se é mostrado apenas um Pokémon por vez.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const pokemon = screen.getAllByTestId(/pokemon-name/);

    expect(pokemon).toHaveLength(1);
  });

  test('Se a Pokédex tem os botões de filtro.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const BTN_FILTER_QTY = 7;
    const btnOfFilter = screen.getAllByTestId(/pokemon-type-button/);
    expect(btnOfFilter).toHaveLength(BTN_FILTER_QTY);

    const btnNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });

    const btnElectric = screen.getByRole('button', { name: /electric/i });
    expect(btnElectric).toBeInTheDocument();
    userEvent.click(btnElectric);
    expect(btnNextPokemon).toBeDisabled();
    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();
    const typeElectric = screen.getAllByText(/Electric/i);
    expect(typeElectric).toHaveLength(2);

    const btnFire = screen.getByRole('button', { name: /fire/i });
    expect(btnFire).toBeInTheDocument();
    userEvent.click(btnFire);
    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeInTheDocument();
    userEvent.click(btnNextPokemon);
    const rapidash = screen.getByText(/rapidash/i);
    expect(rapidash).toBeInTheDocument();
    userEvent.click(btnNextPokemon);
    expect(charmander).toBeInTheDocument();
    const typeFire = screen.getAllByText(/Fire/i);
    expect(typeFire).toHaveLength(2);

    const btnBug = screen.getByRole('button', { name: /Bug/i });
    expect(btnBug).toBeInTheDocument();
    userEvent.click(btnBug);
    const caterpie = screen.getByText(/caterpie/i);
    expect(caterpie).toBeInTheDocument();
    expect(btnNextPokemon).toBeDisabled();
    const typeBug = screen.getAllByText(/Bug/i);
    expect(typeBug).toHaveLength(2);

    const btnPoison = screen.getByRole('button', { name: /Poison/i });
    expect(btnPoison).toBeInTheDocument();
    userEvent.click(btnPoison);
    const ekans = screen.getByText(/ekans/i);
    expect(ekans).toBeInTheDocument();
    expect(btnNextPokemon).toBeDisabled();
    const typePoison = screen.getAllByText(/Poison/i);
    expect(typePoison).toHaveLength(2);

    const btnPsychic = screen.getByRole('button', { name: /Psychic/i });
    expect(btnPsychic).toBeInTheDocument();
    userEvent.click(btnPsychic);
    const alakazam = screen.getByText(/alakazam/i);
    expect(alakazam).toBeInTheDocument();
    userEvent.click(btnNextPokemon);
    const mew = screen.getByText(/mew/i);
    expect(mew).toBeInTheDocument();
    userEvent.click(btnNextPokemon);
    expect(alakazam).toBeInTheDocument();
    const typePsychic = screen.getAllByText(/Psychic/i);
    expect(typePsychic).toHaveLength(2);

    const btnNormal = screen.getByRole('button', { name: /Normal/i });
    expect(btnNormal).toBeInTheDocument();
    userEvent.click(btnNormal);
    const snorlax = screen.getByText(/snorlax/i);
    expect(snorlax).toBeInTheDocument();
    expect(btnNextPokemon).toBeDisabled();
    const typeNormal = screen.getAllByText(/Normal/i);
    expect(typeNormal).toHaveLength(2);

    const btnDragon = screen.getByRole('button', { name: /Dragon/i });
    expect(btnDragon).toBeInTheDocument();
    userEvent.click(btnDragon);
    const dragonair = screen.getByText(/dragonair/i);
    expect(dragonair).toBeInTheDocument();
    expect(btnNextPokemon).toBeDisabled();
    const typeDragon = screen.getAllByText('Dragon');
    expect(typeDragon).toHaveLength(2);

    const btnAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(btnAll);
    expect(btnAll).toBeInTheDocument();
    expect(btnAll).toBeVisible();
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const btnAll = screen.getByRole('button', { name: /all/i });
    expect(btnAll).toBeInTheDocument();
    expect(btnAll).toBeVisible();

    const btnNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(btnNextPokemon).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonCharmander = screen.getByText(/Charmander/i);
    expect(nextPokemonCharmander).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonCaterpie = screen.getByText(/Caterpie/i);
    expect(nextPokemonCaterpie).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonEkans = screen.getByText(/Ekans/i);
    expect(nextPokemonEkans).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonAlakazam = screen.getByText(/Alakazam/i);
    expect(nextPokemonAlakazam).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonMew = screen.getByText(/Mew/i);
    expect(nextPokemonMew).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonRapidash = screen.getByText(/Rapidash/i);
    expect(nextPokemonRapidash).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonSnorlax = screen.getByText(/Snorlax/i);
    expect(nextPokemonSnorlax).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonDragonair = screen.getByText(/Dragonair/i);
    expect(nextPokemonDragonair).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonPikachu = screen.getByText(/Pikachu/i);
    expect(nextPokemonPikachu).toBeInTheDocument();

    history.push('/');
    const pikachu = screen.getByText(/pikachu/i);
    expect(btnAll).toBeInTheDocument();
    expect(pikachu).toBeInTheDocument();
    expect(btnNextPokemon).not.toBeDisabled();
  });
});
