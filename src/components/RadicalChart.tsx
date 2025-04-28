import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const MedicalRadialChart: React.FC = () => {
  const data = {
    series: [80, 120, 130, 98], // Sample values for medical parameters
    options: {
      chart: {
        height: 250, // Reduced chart height
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '25%', // Reduced hollow size for smaller visualization
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: '12px', // Smaller font size for labels
              fontWeight: 'bold',
              color: '#333',
            },
            value: {
              show: true,
              fontSize: '14px', // Smaller font size for values
              fontWeight: 'bold',
              color: '#000',
              formatter: function (val: number) {
                return val + '%';
              },
            },
          },
        },
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'], // Colors for different parameters
      labels: ['Heart Rate', 'Blood Pressure', 'Glucose Level', 'Oxygen Saturation'], // Medical parameter labels
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 200, // Further reduce size for small screens
            },
            plotOptions: {
              radialBar: {
                dataLabels: {
                  name: {
                    fontSize: '10px',
                  },
                  value: {
                    fontSize: '12px',
                  },
                },
              },
            },
          },
        },
      ],
    } as ApexOptions,
  };

  return (
    <div id="chart" className="w-1/4 bg-white rounded-3xl h-fit p-2"> {/* Reduced container width */}
      <ReactApexChart options={data.options} series={data.series} type="radialBar" height={250} />
    </div>
  );
};

export default MedicalRadialChart;
