import { render, screen , waitFor} from '@testing-library/react';
import App from './App';

test('CT01 - Verificar a integração do componente', () => {
  render(<App />);
  const testElement = screen.getByText(/consulta catalogo/i);
  expect(testElement).toBeInTheDocument();
});

test("CT02 - Verificar a integracao no resultado da consulta", async () => {
  render(<App />);
  await waitFor(
    () => {
      const txtLabel = screen.getByText(/eletrobomba/i);
      expect(txtLabel).toBeInTheDocument();
    },
    { timeout: 5000 }
  );
});