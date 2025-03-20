import { render, screen } from '@testing-library/react';
import NavAside from './NavAside';

describe('The navasideComponent', () => {
  test('renders the aside that holds the header, footer and navigation', () => {
    render(<NavAside />);
    const testId = screen.getByTestId('navaside');
    expect(testId).toBeInTheDocument();
  });
});
