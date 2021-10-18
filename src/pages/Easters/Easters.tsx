/* eslint-disable camelcase */
/* eslint-disable max-len */
import React from 'react';
import clsx from 'clsx';
import classes from './Easters.module.scss';
import RoadBackground from '@/components/RoadBackground';
import LogoImg from '@/assets/img/logo.svg';
import Container from '@/utils/components/Container';
import ChipBackImg from '@/assets/img/chips/back.png';
import CrownDiscordImg from '@/assets/img/crown_discord.png';
import ChipImg from '@/assets/img/chips/collection_1.png';
import CrownImg from '@/assets/img/crown.png';
import TwitterIcon from '@/assets/img/icons/twitter_yellow.png';
import DiscordIcon from '@/assets/img/icons/discord_yellow.png';
import InstagramIcon from '@/assets/img/icons/instagram_yellow.png';

const Easters: React.FC = () => (
  <div className={classes.root}>
    <RoadBackground className={classes.bg} />
    <Container className={classes.main}>
      <img src={LogoImg} alt="" />
      <div className={classes.block}>
        <div className={classes['block-text']}>
          <p>What’s up, geeks?</p>
          <p>We’ve got some lit stuff going on. Remember how you were so obsessed with the game exploring every little location for easter eggs?</p>
          <p>Well, we’ve got you! We announce a special event where you’ll need to be curious and attentive to find all easter eggs through our site.</p>
        </div>
        <div className={classes['block-img']}>
          <img src={ChipBackImg} alt="" />
        </div>
      </div>
      <div className={classes.borderBlock}>
        <p>Each few days we’ll notify you about the Easter egg hunting event and give you all instructions on how to find them.</p>
      </div>
      <div className={clsx(classes.block, classes.noBg)}>
        <div className={classes['block-img']}>
          <img src={CrownDiscordImg} alt="" />
        </div>
        <div className={clsx(classes['block-text'], classes.noBg)}>
          <p>So, what are the perks you’ll ask us? </p>
          <p>
            Well, first of all, you’ll get a special role of the King of the Easter eggs in our Discord channel with the
            {' '}
            <span>colourful nickname</span>
            . You will also get one NFT of our artists and 30 minutes earlier notification about the new updates at Artcaps.
            {' '}
          </p>
          <p>So here comes an example of our easter egg.</p>
        </div>
      </div>
      <div className={classes.block}>
        <div className={classes['block-text']}>
          <p className={classes.bold}>Look at this cap carefully. There’s one easter here. All you need to do is simply click on the eye and you will get a notification of successfully discovering an easter egg.</p>
        </div>
        <div className={classes['block-img']}>
          <img src={ChipImg} alt="" />
        </div>
      </div>
      <div className={classes.instruction}>
        <div className={classes['instruction-title']}>
          <h2>Instruction for 5 easter eggs:</h2>
          <h2>Instruction for 5 easter eggs:</h2>
        </div>
        <h3>Follow the steps:</h3>
        <div className={classes['instruction-content']}>
          <div className={clsx(classes['instruction-content__item'])}>
            <div>
              <span>1</span>
              <span>1</span>
            </div>
            <p>Find all easter eggs and get notified about them</p>
          </div>
          <div className={clsx(classes['instruction-content__item'])}>
            <div>
              <span>2</span>
              <span>2</span>
            </div>
            <p>Get the secret code in the last fifth notification</p>
          </div>
          <div className={clsx(classes['instruction-content__item'])}>
            <div>
              <span>3</span>
              <span>3</span>
            </div>
            <p>Send it to the king of the easter eggs chat in discord</p>
          </div>
          <div className={clsx(classes['instruction-content__item'])}>
            <div>
              <span>4</span>
              <span>4</span>
            </div>
            <p>Get crown and become the true king!</p>
            <img src={CrownImg} alt="" />
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes['footer-title']}>
          <h4>See ya, mates!</h4>
          <h4>See ya, mates!</h4>
        </div>
        <div className={classes['footer-content']}>
          <a href="https://twitter.com/ar1caps" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="" />
          </a>
          <a href="https://discord.gg/xuTPCQRtfq" target="_blank" rel="noopener noreferrer">
            <img src={DiscordIcon} alt="" />
          </a>
          <a href="https://instagram.com/ar1caps" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="" />
          </a>
        </div>
      </div>
    </Container>
  </div>
);

export default Easters;
