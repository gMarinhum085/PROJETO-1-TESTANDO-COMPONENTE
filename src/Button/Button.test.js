// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('deve exibir "Clique para o carro andar" e mudar para "O carro está em movimento!" quando o botão for clicado', () => {
  render(<Button text="Clique para o carro andar" />);

  const buttonElement = screen.getByText(/Clique para o carro andar/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);

  const updatedButton = screen.getByText(/O carro está em movimento!/i);
  expect(updatedButton).toBeInTheDocument();
});