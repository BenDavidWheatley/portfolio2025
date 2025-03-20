import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('The languages Component', () => {
  test('renders the footer', () => {
    render(<Footer />);
    const testId = screen.getByTestId('footer');
    expect(testId).toBeInTheDocument();
  });
});
