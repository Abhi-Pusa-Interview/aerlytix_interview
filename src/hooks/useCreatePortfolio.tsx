import {useState} from "react";
import { aircrafts } from "../constants/constants";
import { AircraftProps } from "../interfaces/AircraftProps";

export default function useCreatePortfolio(){
    const [portfolioName, setPortfolioName] = useState<string>("");
    const [aircraftList, setAircraftList] = useState<Array<string>>([]);

    const updatePortfolioName = (name:string) => {
        setPortfolioName(name);
    }

    const addAircraft = (value:string) => {
        const findinAircraftList = aircraftList.filter((aircraft:string) => aircraft === value);
        if(findinAircraftList.length===0){
            let newaircraftList: Array<string> = [...aircraftList];
            aircrafts.map((aircraft:AircraftProps) => {
                if(aircraft.registration===value){
                    newaircraftList.push(value);
                }
                return 0;
            });
            setAircraftList(newaircraftList);
        }
    }

    const removeAircraft = (id:string) => {
        setAircraftList(aircraftList.filter(aircraft => aircraft !== id));
    }

    return {portfolioName,aircraftList,updatePortfolioName,addAircraft,removeAircraft};
}