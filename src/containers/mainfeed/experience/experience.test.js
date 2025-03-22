import { render, screen } from '@testing-library/react';
import Experience from './Experience';

describe('Renders the experience Component', () => {

  test('Renders the main app component', () => {
    render(<Experience />);
    const testId = screen.getByTestId('experience');
    expect(testId).toBeInTheDocument();
  });
  
});
