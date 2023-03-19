import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import PortfolioItemHOC from "./PortfolioItemHOC";

test("render elements in portfolioItemHOC component", () => {
    const portfolioItemHOCDom = render(<PortfolioItemHOC label="item">
        <div data-testid="child-item"></div>
    </PortfolioItemHOC>);
    expect(portfolioItemHOCDom.getByTestId("grid-container")).toBeInTheDocument();
    expect(portfolioItemHOCDom.getAllByTestId("grid-item").length).toEqual(2);
    expect(portfolioItemHOCDom.getByText("item")).toBeInTheDocument();
    expect(portfolioItemHOCDom.getByTestId("child-item")).toBeInTheDocument();
});