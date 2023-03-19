import {render,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import CreatePortfolios from "./CreatePortfolio";
import { PortfolioProps } from "../../../interfaces/portfolioProps";


const mockUpdatePortfolioName = jest.fn();
const mockAddAircraft = jest.fn();
const mockRemoveAircraft = jest.fn();

jest.mock("../../../hooks/useCreatePortfolio", () => {
    return () => ({
        portfolioName: "portfolio name",
        aircraftList: ["ZS-GAO","B-6636"],
        updatePortfolioName: mockUpdatePortfolioName,
        addAircraft: mockAddAircraft,
        removeAircraft: mockRemoveAircraft
    });
});

const mockHandleClose = jest.fn();
const mockPortfolioList:Array<PortfolioProps> = [{
    name:"name",
    id:"1234",
    aircrafts:["ZS-GAO","B-6636"]
}];
const mockAddPortfolio = jest.fn();

test("render all elements of create profile component", () => {
    const CreatePortfolioDom = render(<CreatePortfolios handleClose={mockHandleClose} portfolioList={mockPortfolioList} addPortfolio={mockAddPortfolio} />);
    expect(CreatePortfolioDom.getByText("Create New Portfolio")).toBeInTheDocument();
    expect(CreatePortfolioDom.getByTestId("text-portfolio-name")).toBeInTheDocument();
    expect(CreatePortfolioDom.getByTestId("select-aircraft")).toBeInTheDocument();  
    expect(CreatePortfolioDom.getAllByTestId("selected-aircraft-chip").length).toEqual(2);
    expect(CreatePortfolioDom.getAllByTestId("selected-aircraft-btn").length).toEqual(2);
    expect(CreatePortfolioDom.getAllByTestId("selected-aircraft-icon").length).toEqual(2);
    expect(CreatePortfolioDom.getByTestId("ok-btn")).toBeInTheDocument();
    expect(CreatePortfolioDom.getByTestId("cancel-btn")).toBeInTheDocument();
});

test("update portfolio name is called when input element is changed", () => {
    const CreatePortfolioDom = render(<CreatePortfolios handleClose={mockHandleClose} portfolioList={mockPortfolioList} addPortfolio={mockAddPortfolio} />);
    const field  = CreatePortfolioDom.getByTestId("text-portfolio-name");
    fireEvent.change(field, { target: { value: 'new portfolio name' }});
    expect(mockUpdatePortfolioName).toBeCalledTimes(1);
    expect(mockUpdatePortfolioName).toHaveBeenCalledWith('new portfolio name');
});


test("addportfolio function is called on click of submit button", () => {
    const CreatePortfolioDom = render(<CreatePortfolios handleClose={mockHandleClose} portfolioList={mockPortfolioList} addPortfolio={mockAddPortfolio} />);
    const field  = CreatePortfolioDom.getByTestId("ok-btn");
    fireEvent.click(field,new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));
    expect(mockAddPortfolio).toBeCalledTimes(1);
    expect(mockHandleClose).toBeCalledTimes(1);
});


test("cancel button is clicked", () => {
    const CreatePortfolioDom = render(<CreatePortfolios handleClose={mockHandleClose} portfolioList={mockPortfolioList} addPortfolio={mockAddPortfolio} />);
    const field  = CreatePortfolioDom.getByTestId("cancel-btn");
    fireEvent.click(field,new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));
    expect(mockHandleClose).toBeCalledTimes(1);
});