/* eslint-disable camelcase */
import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './Home';

import HiFromArtCapsTextImg from '@/assets/img/texts/hi_from_artcaps.svg';
import ArtCapsNftScreenImg from '@/assets/img/hi_from_artcaps/nft_screen.svg';
import ArtCapsPrizeImg from '@/assets/img/hi_from_artcaps/artcaps_prize.png';
import ArtCapsChipSetImg from '@/assets/img/hi_from_artcaps/chip_set.png';
import HiFromArtCapsChip1Img from '@/assets/img/chips/hi_from_artcaps_1.png';

import TeamCardChipImage1 from '@/assets/img/chips/team/1.png';
import TeamCardChipImage2 from '@/assets/img/chips/team/2.png';
import TeamCardChipImage3 from '@/assets/img/chips/team/3.png';
import TeamCardChipImage4 from '@/assets/img/chips/team/4.png';
import TeamCardChipImage5 from '@/assets/img/chips/team/5.png';
import TeamCardChipImage6 from '@/assets/img/chips/team/6.png';
import TeamCardChipImage7 from '@/assets/img/chips/team/7.png';
import TeamCardChipImage8 from '@/assets/img/chips/team/8.png';
import TeamCardChipImage9 from '@/assets/img/chips/team/9.png';

import HiFromArtCapsTextMobileImg from '@/assets/img/texts/hi_from_artcaps_mobile.svg';
import ArtCapsPrizeMobileImg from '@/assets/img/hi_from_artcaps/artcaps_prize_mobile.png';
import ArtCapsChipSetShortImg from '@/assets/img/hi_from_artcaps/chip_set_short.png';
import CollectionsTextImg from '@/assets/img/texts/collections.svg';
import CollectionsChipImg_1_1 from '@/assets/img/chips/1/1.png';
import CollectionsChipImg_1_2 from '@/assets/img/chips/1/2.png';
import CollectionsChipImg_1_3 from '@/assets/img/chips/1/3.png';
import CollectionsChipImg_1_4 from '@/assets/img/chips/1/4.png';
import CollectionsChipImg_1_5 from '@/assets/img/chips/1/5.png';
import CollectionsChipImg_1_6 from '@/assets/img/chips/1/6.png';
import CollectionsChipImg_1_7 from '@/assets/img/chips/1/7.png';
import CollectionsChipImg_1_8 from '@/assets/img/chips/1/8.png';
import CollectionsChipImg_1_9 from '@/assets/img/chips/1/9.png';
import CollectionsChipImg_1_10 from '@/assets/img/chips/1/10.png';
import CollectionsChipImg_2_1 from '@/assets/img/chips/2/1.png';
import CollectionsChipImg_2_2 from '@/assets/img/chips/2/2.png';
import CollectionsChipImg_2_3 from '@/assets/img/chips/2/3.png';
import CollectionsChipImg_2_4 from '@/assets/img/chips/2/4.png';
import CollectionsChipImg_2_5 from '@/assets/img/chips/2/5.png';
import CollectionsChipImg_2_6 from '@/assets/img/chips/2/6.png';
import CollectionsChipImg_2_7 from '@/assets/img/chips/2/7.png';
import CollectionsChipImg_2_8 from '@/assets/img/chips/2/8.png';
import CollectionsChipImg_2_9 from '@/assets/img/chips/2/9.png';
import CollectionsChipImg_2_10 from '@/assets/img/chips/2/10.png';
import CollectionsChipImg_3_1 from '@/assets/img/chips/3/1.png';
import CollectionsChipImg_3_2 from '@/assets/img/chips/3/2.png';
import CollectionsChipImg_3_3 from '@/assets/img/chips/3/3.png';
import CollectionsChipImg_3_4 from '@/assets/img/chips/3/4.png';
import CollectionsChipImg_3_5 from '@/assets/img/chips/3/5.png';
import CollectionsChipImg_3_6 from '@/assets/img/chips/3/6.png';
import CollectionsChipImg_3_7 from '@/assets/img/chips/3/7.png';
import CollectionsChipImg_3_8 from '@/assets/img/chips/3/8.png';
import CollectionsChipImg_3_9 from '@/assets/img/chips/3/9.png';
import CollectionsChipImg_3_10 from '@/assets/img/chips/3/10.png';
import CollectionChipBackImg from '@/assets/img/chips/back.png';
import LogoImg from '@/assets/img/logo.svg';
import TimerDaysTextImg from '@/assets/img/texts/days.svg';
import TimerHoursTextImg from '@/assets/img/texts/hours.svg';
import TimerMinTextImg from '@/assets/img/texts/min.svg';
import TimerSecTextImg from '@/assets/img/texts/sec.svg';
import TimerMsecTextImg from '@/assets/img/texts/msec.svg';
import FAQChipImage from '@/assets/img/chips/faq.png';
import FollowUsTextIcon from '@/assets/img/texts/follow_us.svg';
import FollowArrowsRightIcon from '@/assets/img/icons/follow_arrows_right.svg';
import TwitterIcon from '@/assets/img/icons/twitter.png';
import DiscordIcon from '@/assets/img/icons/discord.png';
import InstagramIcon from '@/assets/img/icons/instagram.png';

const HomePage: FC = () => (
  <>
    <Helmet title="ArtCaps">
      <link rel="preload" as="image" href={HiFromArtCapsTextImg} />
      <link rel="preload" as="image" href={ArtCapsNftScreenImg} />
      <link rel="preload" as="image" href={ArtCapsPrizeImg} />
      <link rel="preload" as="image" href={ArtCapsChipSetImg} />
      <link rel="preload" as="image" href={HiFromArtCapsChip1Img} />
      <link rel="preload" as="image" href={TeamCardChipImage1} />
      <link rel="preload" as="image" href={TeamCardChipImage2} />
      <link rel="preload" as="image" href={TeamCardChipImage3} />
      <link rel="preload" as="image" href={TeamCardChipImage4} />
      <link rel="preload" as="image" href={TeamCardChipImage5} />
      <link rel="preload" as="image" href={TeamCardChipImage6} />
      <link rel="preload" as="image" href={TeamCardChipImage7} />
      <link rel="preload" as="image" href={TeamCardChipImage8} />
      <link rel="preload" as="image" href={TeamCardChipImage9} />
      <link rel="preload" as="image" href={HiFromArtCapsTextMobileImg} />
      <link rel="preload" as="image" href={ArtCapsPrizeMobileImg} />
      <link rel="preload" as="image" href={ArtCapsChipSetShortImg} />
      <link rel="preload" as="image" href={CollectionsTextImg} />
      <link rel="preload" as="image" href={CollectionsChipImg_1_1} />
      <link rel="preload" as="image" href={CollectionsChipImg_1_2} />
      <link rel="preload" as="image" href={CollectionsChipImg_1_3} />
      <link rel="preload" as="image" href={CollectionsChipImg_1_4} />
      <link rel="preload" as="image" href={CollectionsChipImg_1_5} />
      <link rel="preload" as="image" href={CollectionsChipImg_1_6} />
      <link rel="preload" as="image" href={CollectionsChipImg_1_7} />
      <link rel="preload" as="image" href={CollectionsChipImg_1_8} />
      <link rel="preload" as="image" href={CollectionsChipImg_1_9} />
      <link rel="preload" as="image" href={CollectionsChipImg_1_10} />
      <link rel="preload" as="image" href={CollectionsChipImg_2_1} />
      <link rel="preload" as="image" href={CollectionsChipImg_2_2} />
      <link rel="preload" as="image" href={CollectionsChipImg_2_3} />
      <link rel="preload" as="image" href={CollectionsChipImg_2_4} />
      <link rel="preload" as="image" href={CollectionsChipImg_2_5} />
      <link rel="preload" as="image" href={CollectionsChipImg_2_6} />
      <link rel="preload" as="image" href={CollectionsChipImg_2_7} />
      <link rel="preload" as="image" href={CollectionsChipImg_2_8} />
      <link rel="preload" as="image" href={CollectionsChipImg_2_9} />
      <link rel="preload" as="image" href={CollectionsChipImg_2_10} />
      <link rel="preload" as="image" href={CollectionsChipImg_3_1} />
      <link rel="preload" as="image" href={CollectionsChipImg_3_2} />
      <link rel="preload" as="image" href={CollectionsChipImg_3_3} />
      <link rel="preload" as="image" href={CollectionsChipImg_3_4} />
      <link rel="preload" as="image" href={CollectionsChipImg_3_5} />
      <link rel="preload" as="image" href={CollectionsChipImg_3_6} />
      <link rel="preload" as="image" href={CollectionsChipImg_3_7} />
      <link rel="preload" as="image" href={CollectionsChipImg_3_8} />
      <link rel="preload" as="image" href={CollectionsChipImg_3_9} />
      <link rel="preload" as="image" href={CollectionsChipImg_3_10} />
      <link rel="preload" as="image" href={CollectionChipBackImg} />
      <link rel="preload" as="image" href={LogoImg} />
      <link rel="preload" as="image" href={TimerDaysTextImg} />
      <link rel="preload" as="image" href={TimerHoursTextImg} />
      <link rel="preload" as="image" href={TimerMinTextImg} />
      <link rel="preload" as="image" href={TimerSecTextImg} />
      <link rel="preload" as="image" href={TimerMsecTextImg} />
      <link rel="preload" as="image" href={FAQChipImage} />
      <link rel="preload" as="image" href={FollowUsTextIcon} />
      <link rel="preload" as="image" href={FollowArrowsRightIcon} />
      <link rel="preload" as="image" href={TwitterIcon} />
      <link rel="preload" as="image" href={DiscordIcon} />
      <link rel="preload" as="image" href={InstagramIcon} />
    </Helmet>
    <Home />
  </>
);

export default HomePage;
