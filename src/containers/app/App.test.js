import { render, screen } from '@testing-library/react';
import App from './App';
import Style from './app.module.css';

describe('The app Component', () => {

  test('Renders the main app component', () => {
    render(<App />);
    const testId = screen.getByTestId('app');
    expect(testId).toBeInTheDocument();
  });
  
  test('Applies the class for styling the main app component', () => {
    render(<App />);
    const container= screen.getByTestId('app');
    expect(container.className).toContain(Style.mainAppContainer);
  })
});
