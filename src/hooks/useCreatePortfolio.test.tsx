import {renderHook,act} from "@testing-library/react";
import "@testing-library/jest-dom";
import useCreatePortfolio from "./useCreatePortfolio";

test("return proper value from useportfoliolisthook", () => {
    const {result} = renderHook(() => useCreatePortfolio());
    expect(result.current.portfolioName).toEqual("");
    expect(result.current.aircraftList).toEqual([]);
});

test("call updatePortfolioName method ", () => {
    const {result} = renderHook(() => useCreatePortfolio());
    act(() => {
        result.current.updatePortfolioName("new portfolio name");
    });
    expect(result.current.portfolioName).toEqual("new portfolio name");
});

test("call addaircraft function", () => {
    const {result} = renderHook(() => useCreatePortfolio());
    act(() => {
        result.current.addAircraft("ZS-GAO");
    });
    expect(result.current.aircraftList.length).toEqual(1);
    act(() => {
        result.current.addAircraft("D-AIUO");
    });
    expect(result.current.aircraftList.length).toEqual(2);
});

test("call remove aircraft function", () => {
    const {result} = renderHook(() => useCreatePortfolio());
    act(() => {
        result.current.addAircraft("ZS-GAO");
    });
    act(() => {
        result.current.addAircraft("D-AIUO");
    });
    act(() => {
        result.current.removeAircraft("D-AIUO");
    });
    expect(result.current.aircraftList.length).toEqual(1);
});