import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('The languages Component', () => {
  test('renders the navigation bar', () => {
    render(<Navigation />);
    const testId = screen.getByTestId('navigation');
    expect(testId).toBeInTheDocument();
  });
});
