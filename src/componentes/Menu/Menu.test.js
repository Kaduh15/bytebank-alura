import { render, screen } from '@testing-library/react';

import Menu from '.';

test('Deve Renderizar um link para a página inicial', () => {
  render(<Menu />);

  const linkPaginaInicial = screen.getByText('Inicial');

  expect(linkPaginaInicial).toBeInTheDocument();
});

test('Deve Renderizar uma lista de links para a página inicial', () => {
  render(<Menu />);

  const listaDeLinks = screen.getAllByRole('link');

  expect(listaDeLinks).toHaveLength(4);
});

