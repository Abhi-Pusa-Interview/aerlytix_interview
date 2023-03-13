import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Pages import
import PortfoliosList from "./pages/portfolios/portfoliosList/PortfoliosList";
import PortfolioDetails from "./pages/portfolios/portfolioDetails/PortfolioDetails";
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "portfolios",
        element: <PortfoliosList />,
      },
      {
        path: "portfolios/:portfolioId",
        element: <PortfolioDetails />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
