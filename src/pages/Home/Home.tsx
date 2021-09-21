import React from 'react';
import TimerSection from './Sections/Timer';
import classes from './Home.module.scss';
import RoadBackground from '@/components/RoadBackground';
import HiFromArtcaps from './Sections/HiFromArtcaps';
import Collections from './Sections/Collections';
import Roadmap from './Sections/Roadmap';
import Facts from './Sections/Facts';
import Team from './Sections/Team';
import HowToGet from './Sections/HowToGet';
import FAQ from './Sections/FAQ';

const Home: React.FC = () => (
  <div className={classes.root}>
    <div className={classes['first-screen']}>
      <TimerSection />
      <HiFromArtcaps />
      <RoadBackground className={classes['first-screen__bg']} />
    </div>
    <Collections />
    <Roadmap />
    <Facts />
    <Team />
    <HowToGet />
    <FAQ />
  </div>
);

export default Home;
