import {render,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import PortfolioItem from "./PortfolioItem";

const portfolio = {
    name:"portfolio 1",
    id: "1234",
    aircrafts:["ZS-GAO"]
}

let mockNavigate = jest.fn();
let removeHandler = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
   useNavigate: () => mockNavigate,
 }));

test("render all the element in portfolioitem component", () => {
    const portfolioItemDom =  render(<PortfolioItem {...portfolio} removeHandler={removeHandler} />);
    expect(portfolioItemDom.getByTestId("close-btn")).toBeInTheDocument();
    expect(portfolioItemDom.getByTestId("item-wrapper")).toBeInTheDocument();
    expect(portfolioItemDom.getByText("portfolio 1")).toBeInTheDocument();
});

test("navigate function is called on item button clicked", () => {
    const portfolioItemDom =  render(<PortfolioItem {...portfolio} removeHandler={removeHandler} />);
    fireEvent(
        portfolioItemDom.getByTestId("item-wrapper"),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
    )
    expect(mockNavigate).toBeCalledTimes(1);
});

test("remove function is called on close button clicked", () => {
    const portfolioItemDom =  render(<PortfolioItem {...portfolio} removeHandler={removeHandler} />);
    fireEvent(
        portfolioItemDom.getByTestId("close-btn"),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
    )
    expect(removeHandler).toBeCalledTimes(1);
});