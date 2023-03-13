import {atom} from "recoil";
import {portfolios} from "../constants/constants";

export const portfolioState = atom({
    key: 'portfolioState', // unique ID (with respect to other atoms/selectors)
    default: portfolios
});
