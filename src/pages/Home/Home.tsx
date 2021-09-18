import React from 'react';
import TimerSection from './Sections/Timer';
import classes from './Home.module.scss';
import RoadBackground from '@/components/RoadBackground';

const Home: React.FC = () => {
  console.log('object');
  return (
    <div>
      <div className={classes['first-screen']}>
        <TimerSection />
        <RoadBackground className={classes['first-screen__bg']} />
      </div>
    </div>
  );
};

export default Home;
