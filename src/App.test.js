import { render, screen } from '@testing-library/react';
import App from './App';

test('checks for terms and conditions text', () => {
  render(<App />);
  const termsAndCond = screen.getByText(/terms and conditions/);
  expect(termsAndCond).toBeInTheDocument();
});

// Another way of doing similar check for text
test('checks for Loading... text', () => {
  const { getByText } = render(<App />);
  const loading = getByText(/Loading.../);
  expect(loading).toHaveTextContent("Loading...");
});