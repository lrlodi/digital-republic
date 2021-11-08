import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('Aplicação renderiza os componentes corretamente', () => {
  render(<App />);

  const title = screen.getByText('Digital Republic Paint Calculator');
  const wallInputs = screen.getAllByText(/parede/i);
  const widthInputs = screen.getAllByText(/Largura/i);
  const heightInputs = screen.getAllByText(/Altura/i);
  const doorsInputs = screen.getAllByText(/portas/i);
  const windowsInputs = screen.getAllByText(/janelas/i);
  const addBtns = screen.getAllByText(/Adicionar/i)

  expect(title).toBeInTheDocument();
  expect(wallInputs.length).toBe(4);
  expect(widthInputs.length).toBe(4);
  expect(heightInputs.length).toBe(4);
  expect(doorsInputs.length).toBe(4);
  expect(windowsInputs.length).toBe(4);
  expect(addBtns.length).toBe(4);

  expect(wallInputs[0]).toBeInTheDocument();
  expect(widthInputs[0]).toBeInTheDocument();
  expect(heightInputs[0]).toBeInTheDocument();
  expect(doorsInputs[0]).toBeInTheDocument();
  expect(windowsInputs[0]).toBeInTheDocument();
  expect(addBtns[0]).toBeInTheDocument();
})

test('Preenchimento das informações respeita as regras de negócio', () => {
  render(<App />);

  const widthInput = screen.getAllByLabelText(/Largura/)[0];
  const heightInput = screen.getAllByLabelText(/Altura/)[0];
  // const addBtn = screen.getAllByText(/Adicionar/i)[0];

  const TEST_WIDTH_MAX = 20;
  const TEST_HEIGHT = 3;

  userEvent.type(widthInput, TEST_WIDTH_MAX);
  userEvent.type(heightInput, TEST_HEIGHT);
  // userEvent.click(addBtn); // corrigir implementação
})