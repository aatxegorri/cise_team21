import { render, screen } from '@testing-library/react';
import App from './App';

test('renders subheader', () => {
  render(<App />);
  const linkElement = screen.getByText("CISE - Team 21");
  expect(linkElement).toBeInTheDocument();
});
