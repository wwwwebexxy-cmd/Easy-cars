import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the EasyCars landing page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /Your dream car starts here/i })).toBeInTheDocument();
  expect(screen.getByText('EasyCars Auto Trading LLC', { exact: true })).toBeInTheDocument();
});
