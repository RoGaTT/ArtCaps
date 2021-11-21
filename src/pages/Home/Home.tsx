import React from 'react';
import TimerSection from './Sections/Timer';
import classes from './Home.module.scss';
import RoadBackground from '@/components/RoadBackground';
import About from './Sections/About';
import Roadmap from './Sections/Roadmap';
import Team from './Sections/Team';
import FAQ from './Sections/FAQ';
import DevelopmentRoadmap from './Sections/DevelopmentRoadmap';
import Footer from '@/utils/components/Layout/components/Footer';

const Home: React.FC = () => (
  <div className={classes.root}>
    <div className={classes['first-screen']}>
      <TimerSection />
      <About />
      <RoadBackground className={classes['first-screen__bg']} />
    </div>
    <Roadmap />
    <DevelopmentRoadmap />
    <FAQ />
    <Team />
    <Footer />
  </div>
);

export default Home;
