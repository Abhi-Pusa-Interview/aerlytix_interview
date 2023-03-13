import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {PortfolioProps} from "../../interfaces/portfolioProps";
import { useFlightData } from '../../hooks/useFlightData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Flight chart of portfolio',
    },
  },
};


const Dashboard = (props:PortfolioProps) => {
  const {data} = useFlightData(props);

  return <Line style={{padding:"50px"}} options={options} data={data} />;
}

export default Dashboard;