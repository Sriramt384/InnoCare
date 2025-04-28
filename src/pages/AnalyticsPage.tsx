import React from 'react';
import MedicalRadialChart from '../components/RadicalChart';
import StressDataChart from '../components/Stress';
import SleepTracker from '../components/SleepTracker';
import StrokedGauge from '../components/StrokeGauge';

const AnalyticsPage: React.FC = () => {
  return (
    <div className='w-full flex flex-col gap-5' style={{ fontFamily: "Poppins" }}>
      <div className='mx-5 px-5 flex gap-10 justify-between h-1/2 pt-5'>
        <MedicalRadialChart />
        <StressDataChart />
      </div>
      <div className='flex gap-10 mx-5 px-7 h-1/2'>
        <SleepTracker />
        <StrokedGauge />
      </div>
    </div>
  );
};

export default AnalyticsPage;
