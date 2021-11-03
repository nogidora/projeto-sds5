import Chart from 'react-apexcharts';

/*modelo do apex charts*/
const  DonutChart = () =>{
   const mockData = {
      series: [449138, 433928, 466867, 292426, 450088],
      labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  }
  
  const options = {
      legend: {
          show: true
      }
  }
    
    return (
      <Chart 
            options={{...options, labels:mockData.labels}}
            series={mockData.series}
            type="donut"
            height="240"
      />  
    );
  }
  
  export default DonutChart;
  