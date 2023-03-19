import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from './App';

jest.mock("./component/NavBar/NavBar",() => () => "NavBar");

test('renders learn react link', () => {
  const AppDom = render(<App />);
  expect(AppDom.getByText(/NavBar/)).toBeInTheDocument();
});
