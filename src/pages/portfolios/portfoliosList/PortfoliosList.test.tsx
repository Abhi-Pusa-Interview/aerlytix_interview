import {render,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import PortfoliosList from "./PortfoliosList";
import { PortfolioProps } from "../../../interfaces/portfolioProps";

const open = false;
const mockHandleOpen = jest.fn();
const mockHandleClose = jest.fn();

const portfolioList:Array<PortfolioProps> = [{
    name:"portfolio 1",
    id: "1234",
    aircrafts:["ZS-GAO"]
},{
    name:"portfolio 2",
    id: "12345",
    aircrafts:["ZS-GAG"]
}];
const mockRemovePortfolio = jest.fn();
const mockAddPortfolio = jest.fn();

jest.mock("../../../hooks/useModal", () => {
    return () => ({open:open,handleOpen:mockHandleOpen,handleClose:mockHandleClose});
});

jest.mock("../../../hooks/usePortfolioListHooks", () => {
    return () => ({portfolioList:portfolioList,removePortfolio:mockRemovePortfolio,addPortfolio:mockAddPortfolio});
});

jest.mock("../createPortfolio/CreatePortfolio", () => () => "Create Portfolio");

jest.mock("../PortfolioItem/PortfolioItem", () => () => "Portfolio Item");

jest.mock("../../../component/Modal/Modal", () => () => "Basic Modal");

test("render all the component", () => {
    const PortfolioListDom = render(<PortfoliosList />);
    expect(PortfolioListDom.getByTestId("box-wrapper")).toBeInTheDocument();
    expect(PortfolioListDom.getByTestId("add-item-btn")).toBeInTheDocument();
    expect(PortfolioListDom.getByTestId("add-item-icon")).toBeInTheDocument();
    expect(PortfolioListDom.queryByText("Create Portfolio")).not.toBeInTheDocument();
    expect(PortfolioListDom.getByText("Basic Modal")).toBeInTheDocument();
    expect(PortfolioListDom.getAllByText("Portfolio Item").length).toEqual(2);
})

test("add item btn click will call handleOpen function", () => {
    const PortfolioListDom = render(<PortfoliosList />);
    fireEvent(
        PortfolioListDom.getByTestId("add-item-btn"),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
    )
    expect(mockHandleOpen).toBeCalledTimes(1);
})