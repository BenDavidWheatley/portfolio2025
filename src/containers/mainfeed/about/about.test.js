import { render, screen } from '@testing-library/react';
import About from './About';


describe('About Component', () => {
  test('renders the about me container', () => {
    render(<About />);
    const testId = screen.getByTestId('about');
    expect(testId).toBeInTheDocument();
  });
});