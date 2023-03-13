import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

test('navbar is rendered', async () => {
    // Act
    const router = createBrowserRouter([
        {
          path: "/",
          element: <NavBar />,
        }
      ]);
    const navDom = render(<RouterProvider router={router} />);
    // Assert
    expect(navDom.getByTestId('appbar')).toBeTruthy();
    expect(navDom.getByTestId('menuWrapper')).toBeTruthy();
    expect(navDom.getByTestId('logo')).toBeTruthy();
});