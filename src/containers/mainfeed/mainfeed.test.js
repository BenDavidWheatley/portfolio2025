import { render, screen } from '@testing-library/react';
import Mainfeed from './Mainfeed';

describe('Mainfeed Component', () => {

  test('renders the Mainfeed component', () => {
    render(<Mainfeed />); // Render the component first before querying the element
    const testId = screen.getByTestId('mainfeed');
    expect(testId).toBeInTheDocument();
  });

});
