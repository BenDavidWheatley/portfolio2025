import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('The languages Component', () => {
  test('renders the header', () => {
    render(<Header />);
    const testId = screen.getByTestId('header');
    expect(testId).toBeInTheDocument();
  });
});
