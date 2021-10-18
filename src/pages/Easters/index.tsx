/* eslint-disable camelcase */
import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './Easters';

import CollectionsChipImg_1_1 from '@/assets/img/chips/1/1.png';
import CollectionChipBackImg from '@/assets/img/chips/back.png';
import LogoImg from '@/assets/img/logo.svg';
import TwitterIcon from '@/assets/img/icons/twitter.png';
import DiscordIcon from '@/assets/img/icons/discord.png';
import InstagramIcon from '@/assets/img/icons/instagram.png';

const HomePage: FC = () => (
  <>
    <Helmet title="ArtCaps">
      <link rel="preload" as="image" href={CollectionsChipImg_1_1} />
      <link rel="preload" as="image" href={CollectionChipBackImg} />
      <link rel="preload" as="image" href={LogoImg} />
      <link rel="preload" as="image" href={TwitterIcon} />
      <link rel="preload" as="image" href={DiscordIcon} />
      <link rel="preload" as="image" href={InstagramIcon} />
    </Helmet>
    <Home />
  </>
);

export default HomePage;
