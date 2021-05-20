import React from 'react';
import { Line } from 'react-chartjs-2';
import './DetailView.css';

class DetailView extends React.Component {
  render() {
    const data = this.props.weatherData;
    const data1 = data.map(ele => ele.hour);
    const temp = data1.map(ele => ele.map(ele => ele.temp_c));
    // console.log(temp);
    const realData = {
      labels: [
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
      ],
      datasets: [
        {
          label: `Temp1`,
          data: temp[0],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          tension: 0.2,
          backgroundColor: 'blue',
        },
        {
          label: 'Temp2 ',
          data: temp[1],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          tension: 0.2,
          backgroundColor: 'red',
        },
        {
          label: 'Temp3 ',
          data: temp[2],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          tension: 0.2,
          backgroundColor: 'black',
        },
      ],
    };
    if (this.props.weatherData.length === 0) {
      return <div></div>;
    } else {
      return (
        <div className="chart">
          {/* <h1>Graph</h1> */}
          <Line data={realData} />
        </div>
      );
    }
  }
}

export default DetailView;
