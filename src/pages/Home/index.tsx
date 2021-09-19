import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './Home';

import HiFromArtCapsTextImg from '@/assets/img/texts/hi_from_artcaps.svg';
import ArtCapsNftScreenImg from '@/assets/img/hi_from_artcaps/nft_screen.svg';
import ArtCapsPrizeImg from '@/assets/img/hi_from_artcaps/artcaps_prize.png';
import ArtCapsChipSetImg from '@/assets/img/hi_from_artcaps/chip_set.png';
import HiFromArtCapsChip1Img from '@/assets/img/chips/hi_from_artcaps_1.svg';
import HiFromArtCapsChip2Img from '@/assets/img/chips/hi_from_artcaps_2.svg';

const HomePage: FC = () => (
  <>
    <Helmet title="ArtCaps">
      <link rel="preload" as="image" href={HiFromArtCapsTextImg} />
      <link rel="preload" as="image" href={ArtCapsNftScreenImg} />
      <link rel="preload" as="image" href={ArtCapsPrizeImg} />
      <link rel="preload" as="image" href={ArtCapsChipSetImg} />
      <link rel="preload" as="image" href={HiFromArtCapsChip1Img} />
      <link rel="preload" as="image" href={HiFromArtCapsChip2Img} />
    </Helmet>
    <Home />
  </>
);

export default HomePage;
