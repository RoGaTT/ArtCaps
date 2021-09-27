/* eslint-disable react/no-array-index-key */
import React, {
  FC,
} from 'react';
import clsx from 'clsx';

import classes from './TeamCard.module.scss';

import TwitterIcon from '@/assets/img/icons/twitter_extra.svg';

interface PropsType {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  img: string;
  nickname: string;
  // eslint-disable-next-line react/require-default-props
  twitterBio?: string;
  role: () => JSX.Element;
}

const TeamCard: FC<PropsType> = ({
  className,
  img,
  nickname,
  twitterBio,
  role,
}) => (
  <div className={clsx(classes.root, className)}>
    <div>
      <img src={img} alt="" />
      <div>
        <span>{role()}</span>
        {
            twitterBio && (
              <a href={`https://twitter.com/${twitterBio}`} target="_blank" rel="noreferrer">
                <img src={TwitterIcon} alt="" />
              </a>
            )
          }
      </div>
    </div>
    <span>{nickname}</span>
  </div>
);

export default TeamCard;
