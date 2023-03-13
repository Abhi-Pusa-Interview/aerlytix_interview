import {useRecoilState} from 'recoil';
import {PortfolioProps} from "../interfaces/portfolioProps";
import {portfolioState} from "../recoilState/state";
 

export function usePortfolioListHooks() {
    const [portfolioList, setPortfolioList] = useRecoilState<Array<PortfolioProps>>(portfolioState);

    const removePortfolio = (id:string) => {
        let newPortfolioList = [...portfolioList];
        newPortfolioList = newPortfolioList.filter((list:PortfolioProps) => id !== list.id);
        setPortfolioList(newPortfolioList);
    }

    const addPortfolio = (portfolio:PortfolioProps) => {
        setPortfolioList([...portfolioList,portfolio]);
    }

    return {portfolioList,removePortfolio,addPortfolio}
}