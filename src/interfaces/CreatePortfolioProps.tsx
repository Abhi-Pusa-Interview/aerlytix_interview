import {PortfolioProps} from "./portfolioProps";

export interface CreatePortfolioProps{
    handleClose:Function,
    portfolioList:Array<PortfolioProps>,
    addPortfolio: (p:PortfolioProps) => void
}