import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './Home';

import HiFromArtCapsTextImg from '@/assets/img/texts/hi_from_artcaps.svg';
import ArtCapsNftScreenImg from '@/assets/img/hi_from_artcaps/nft_screen.svg';
import ArtCapsPrizeImg from '@/assets/img/hi_from_artcaps/artcaps_prize.png';
import ArtCapsChipSetImg from '@/assets/img/hi_from_artcaps/chip_set.png';
import HiFromArtCapsChip1Img from '@/assets/img/chips/hi_from_artcaps_1.svg';
import HiFromArtCapsChip2Img from '@/assets/img/chips/hi_from_artcaps_2.svg';

import TeamCardChipImage1 from '@/assets/img/chips/team/1.png';
import TeamCardChipImage2 from '@/assets/img/chips/team/2.png';
import TeamCardChipImage3 from '@/assets/img/chips/team/3.png';
import TeamCardChipImage4 from '@/assets/img/chips/team/4.png';
import TeamCardChipImage5 from '@/assets/img/chips/team/5.png';
import TeamCardChipImage6 from '@/assets/img/chips/team/6.png';
import TeamCardChipImage7 from '@/assets/img/chips/team/7.png';
import TeamCardChipImage8 from '@/assets/img/chips/team/8.png';
import TeamCardChipImage9 from '@/assets/img/chips/team/9.png';

const HomePage: FC = () => (
  <>
    <Helmet title="ArtCaps">
      <link rel="preload" as="image" href={HiFromArtCapsTextImg} />
      <link rel="preload" as="image" href={ArtCapsNftScreenImg} />
      <link rel="preload" as="image" href={ArtCapsPrizeImg} />
      <link rel="preload" as="image" href={ArtCapsChipSetImg} />
      <link rel="preload" as="image" href={HiFromArtCapsChip1Img} />
      <link rel="preload" as="image" href={HiFromArtCapsChip2Img} />
      <link rel="preload" as="image" href={TeamCardChipImage1} />
      <link rel="preload" as="image" href={TeamCardChipImage2} />
      <link rel="preload" as="image" href={TeamCardChipImage3} />
      <link rel="preload" as="image" href={TeamCardChipImage4} />
      <link rel="preload" as="image" href={TeamCardChipImage5} />
      <link rel="preload" as="image" href={TeamCardChipImage6} />
      <link rel="preload" as="image" href={TeamCardChipImage7} />
      <link rel="preload" as="image" href={TeamCardChipImage8} />
      <link rel="preload" as="image" href={TeamCardChipImage9} />
    </Helmet>
    <Home />
  </>
);

export default HomePage;
