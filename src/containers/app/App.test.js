import { render, screen } from '@testing-library/react';
import App from './App';

describe('The app Component', () => {

  test('Renders the main app component', () => {
    render(<App />);
    const testId = screen.getByTestId('app');
    expect(testId).toBeInTheDocument();
  });
  
});
