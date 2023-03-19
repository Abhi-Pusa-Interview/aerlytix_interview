import {useState, useEffect} from "react";
import { FlightDataProps } from "../interfaces/FlightDataProps";
import {PortfolioProps} from "../interfaces/portfolioProps";
import {getFlightData} from "../services/service";

export function useFlightData(props:PortfolioProps) {
    const [flightData,setFlightData] = useState<undefined|Array<FlightDataProps>>();

    let timeHash:any = {};
    
    useEffect(() => {
      getFlightData().then((data) => {
        setFlightData(data.filter((d:FlightDataProps)=>props.aircrafts.indexOf(d.registration)!==-1));
      });
    },[]);

    //console.log('flight data',flightData);
  
    flightData?.map((flight:FlightDataProps) => {
      let flightStartTime = flight.departure_timestamp;
      let flightEndTime = flight.arrival_timestamp;
      let flightStartDate = new Date(flightStartTime);
      let flightEndDate = new Date(flightStartTime);
      let flightStartString = `'${flightStartDate.getFullYear()}-${flightStartDate.getMonth()}-${flightStartDate.getDate()}'`;
      let flightEndString = `'${flightEndDate.getFullYear()}-${flightEndDate.getMonth()}-${flightEndDate.getDate()}'`;
      
      if(flightStartString === flightEndString){
        if(!timeHash[flightStartString]){
          timeHash[flightStartString]={"flightHour":((flightEndTime - flightStartTime)/60000),"flightCycle":1};
        }else{
          let flightHour = timeHash[flightStartString]["flightHour"]+((flightEndTime - flightStartTime)/60000);
          let flightCycle = timeHash[flightStartString]["flightCycle"]+1;
          timeHash[flightStartString]={"flightHour":flightHour,"flightCycle":flightCycle};
        }
      }else{
        let midnightStartDate = new Date(flightEndDate).valueOf();
        if(!timeHash[flightStartString]){
          timeHash[flightStartString]={"flightHour":((midnightStartDate - flightStartTime)/60000),"flightCycle":1};
        }else{
          let flightHour = timeHash[flightStartString]["flightHour"]+((midnightStartDate - flightStartTime)/60000);
          let flightCycle = timeHash[flightStartString]["flightCycle"];
          timeHash[flightStartString]={"flightHour":flightHour,"flightCycle":flightCycle};
        }
        if(!timeHash[flightEndString]){
          timeHash[flightEndString]={"flightHour":((flightEndTime - midnightStartDate)/60000),"flightCycle":1};
        }else{
          let flightHour = timeHash[flightEndString]["flightHour"]+((flightEndTime - midnightStartDate)/60000);
          let flightCycle = timeHash[flightEndString]["flightCycle"];
          timeHash[flightEndString]={"flightHour":flightHour,"flightCycle":flightCycle};
        }
      }
      return 0;
    });
  
    let data:any = {
      labels:[],
      datasets: [
        {
          label: 'Flight Hours',
          data: [],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Flight Cycle',
          data: [],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
  
    Object.keys(timeHash).map((key:string) => {
      data.labels.push(key);
      data.datasets[0].data.push(timeHash[key]["flightHour"]);
      data.datasets[1].data.push(timeHash[key]["flightCycle"]);
      return 0;
    });

    console.log("data",data);

    return {data};
}