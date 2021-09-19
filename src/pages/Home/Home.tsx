import React from 'react';
import TimerSection from './Sections/Timer';
import classes from './Home.module.scss';
import RoadBackground from '@/components/RoadBackground';
import HiFromArtcaps from './Sections/HiFromArtcaps';
import Collections from './Sections/Collections';
import Roadmap from './Sections/Roadmap';

const Home: React.FC = () => {
  console.log('object');
  return (
    <div className={classes.root}>
      <div className={classes['first-screen']}>
        <TimerSection />
        <HiFromArtcaps />
        <Collections />
        <Roadmap />
        <RoadBackground className={classes['first-screen__bg']} />
      </div>
    </div>
  );
};

export default Home;
