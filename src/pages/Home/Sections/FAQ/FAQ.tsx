/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { FC } from 'react';
import clsx from 'clsx';

import classes from './FAQ.module.scss';
import Container from '@/utils/components/Container';
import FAQTextImage from '@/assets/img/texts/faq.svg';
import FAQChipImage from '@/assets/img/chips/faq.png';

import TwitterIcon from '@/assets/img/icons/twitter.png';
import DiscordIcon from '@/assets/img/icons/discord.png';
import InstagramIcon from '@/assets/img/icons/instagram.png';
import { goBlank } from '@/utils/functions/dom';

interface PropsType {
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

const FAQ: FC<PropsType> = ({
  className,
}) => (
  <Container
    className={clsx(classes.root, className)}
    wrapperClassName={classes.wrapper}
  >
    <div className={clsx(classes.image, classes.noMobile)}>
      <img src={FAQChipImage} alt="" />
    </div>
    <div className={classes.content}>
      <img src={FAQTextImage} alt="" />
      <div>
        <span>What is ArtCaps?</span>
        <p>A brand-new crypto project aimed to promote original artists and their art.</p>
      </div>
      <div>
        <span>How much does one token cost?</span>
        <p>0.06 EHT plus gas fee.</p>
      </div>
      <div>
        <span>What does “four-for-one” mean?</span>
        <p>First 60% of supporters will receive three special NFT-materials created by ArtCaps’ artists.</p>
      </div>
      <div>
        <span>When will the sale begin?</span>
        <p>
          NFTs will be available for sale ASAP. Watch the timer! The exact date will be announced on our social media.
          <br />
          Follow updates on our Twitter and Discord server.
        </p>
      </div>
      <div>
        <span>What is artcaps game?</span>
        <p>
          It’s a chance to win an extra NFT in our unique caps game. Every Artcapser can play right after Mint! Don&apos;t miss your chance, participation is free!
        </p>
      </div>
      <div className={classes.socials}>
        <img onClick={goBlank('https://twitter.com/ar1caps')} src={TwitterIcon} alt="" />
        <img onClick={goBlank('https://discord.gg/xuTPCQRtfq')} src={DiscordIcon} alt="" />
        <img onClick={goBlank('https://instagram.com/ar1caps')} src={InstagramIcon} alt="" />
      </div>
    </div>
  </Container>
);

export default FAQ;
