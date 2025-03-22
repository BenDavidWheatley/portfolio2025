import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('The languages Component', () => {

  test('renders the header', () => {
    render(<Header />);
    const testId = screen.getByTestId('header');
    expect(testId).toBeInTheDocument();
  });

  test('My name, job title and location to be in the header', () => {
    render(<Header />)
    const myName = screen.getByText('Ben Wheatley');
    const jobTitle = screen.getByText('Full Stack Developer');
    const location = screen.getByText('Oxford Based')
    expect(myName).toBeInTheDocument();
    expect(jobTitle).toBeInTheDocument();
    expect(location).toBeInTheDocument();
  })

});
