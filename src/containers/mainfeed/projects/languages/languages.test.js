import { render, screen } from '@testing-library/react';
import Languages from './Languages';

describe('The languages Component', () => {
  test('renders the languages containers', () => {
    render(<Languages />);
    const testId = screen.getByTestId('languages');
    expect(testId).toBeInTheDocument();
  });
});
