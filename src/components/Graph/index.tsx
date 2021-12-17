import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';

import styles from "./styles.module.scss";


export function Graph() {
  
  Chart.register(...registerables);

  const state = {
    labels: ['January', 'February', 'March',
      'April', 'May','June', 'July', 'August'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: '#6C5DD3',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 0,
        data: [65, 59, 80, 81, 56, 20, 70, 90],
        barPercentage: 0.2,
        minBarLength: 3
      }
    ]
  }

  return (
    <div className={styles.graphContainer}>
      <h2>Sales Report</h2>
      <div className={styles.graphCart}>
        <Bar 
          data={state}
          options={{
            plugins: {
              title: {
                display: true,
              },
              
              legend: {
                display: true,
                position: 'right'
              }
            }
          }}
        />
      </div>
    </div>
  );
}