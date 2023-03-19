import {renderHook,act} from "@testing-library/react";
import "@testing-library/jest-dom";
import useModal from "./useModal";

test("return requied values from useModal return false", () => {
    const {result} = renderHook(() => useModal());
    expect(result.current.open).toBeFalsy();
});

test("return requied values from useModal returns true", () => {
    const {result} = renderHook(() => useModal());
    act(() => {
        result.current.handleOpen();
    });
    expect(result.current.open).toBeTruthy();
});

test("return requied values from useModal returns false", () => {
    const {result} = renderHook(() => useModal());
    act(() => {
        result.current.handleClose();
    });
    expect(result.current.open).toBeFalsy();
});