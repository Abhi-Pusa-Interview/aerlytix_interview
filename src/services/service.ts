import {aircrafts} from "../constants/constants";
import {AircraftProps} from "../interfaces/AircraftProps";
import { FlightDataProps } from "../interfaces/FlightDataProps";


let cityCode = ['ATH','DUB','LHR','TXL','FRA','LTN'];

let cityDistGraph = [
    [0,60,80,120,150,70],
    [60,0,30,180,80,25],
    [80,30,0,70,60,90],
    [120,180,70,0,30,40],
    [150,80,60,30,0,60],
    [70,25,90,40,60,0]
];

export const getFlightData = () => new Promise<Array<FlightDataProps>>((resolve, reject) => {
    let flightData:Array<FlightDataProps> = [];
    let startDate = new Date();
    startDate.setDate(startDate.getDate() - 10);
    let startTime = startDate.valueOf();
    let endTime = new Date().valueOf();

    aircrafts.map((aircraft:AircraftProps) => {
      let startCityIndex = Math.floor(Math.random() * 6);
      let currentTime = startTime;
      while(currentTime < endTime){
        let endCityIndex = Math.floor(Math.random() * 6);
        while(startCityIndex === endCityIndex){
          endCityIndex = Math.floor(Math.random() * 6);
        }
        let data = {
          "flight_number": "FR1454",
          "registration": aircraft.registration,
          "departure_airport": cityCode[startCityIndex],
          "departure_timestamp": currentTime,
          "arrival_airport": cityCode[endCityIndex],
          "arrival_timestamp": currentTime+(cityDistGraph[startCityIndex][endCityIndex]*60*1000),
        };
        flightData.push(data);
        currentTime+=(cityDistGraph[startCityIndex][endCityIndex]*60*1000)+(Math.floor(Math.random()*6)*60*60*1000);
        startCityIndex = endCityIndex;
      }
      return 0;
    })
    setTimeout(() => {
      resolve(flightData);
    }, 1000);
  });
