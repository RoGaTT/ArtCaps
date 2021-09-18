import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './Home';

const HomePage: FC = () => (
  <>
    <Helmet title="ArtCaps">
      <link rel="preload" as="image" />
    </Helmet>
    <Home />
  </>
);

export default HomePage;
