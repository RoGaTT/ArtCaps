/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import React, {
  FC, useCallback,
} from 'react';
import clsx from 'clsx';

import classes from './TeamCard.module.scss';

import TwitterIcon from '@/assets/img/icons/twitter_extra.png';

interface PropsType {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  img: string;
  nickname: string;
  // eslint-disable-next-line react/require-default-props
  twitterBio?: string;
  role: () => JSX.Element;
  isEaster?: boolean;
  onEasterClick?: { (): void };
}

const TeamCard: FC<PropsType> = ({
  className,
  img,
  nickname,
  twitterBio,
  role,
  isEaster,
  onEasterClick,
}) => {
  const memoOnLinkClick = useCallback(onLinkClick, []);

  return (
    <div className={clsx(classes.root, className)}>
      <div>
        <img src={img} alt="" />
        <div>
          <span>{role()}</span>
          {
              twitterBio && (
                <a href={`https://twitter.com/${twitterBio}`} onClick={memoOnLinkClick} target="_blank" rel="noreferrer">
                  <img src={TwitterIcon} alt="" />
                </a>
              )
            }
        </div>
      </div>
      <span>{nickname}</span>
    </div>
  );
  function onLinkClick(): void {
    if (isEaster && onEasterClick) onEasterClick();
  }
};

export default TeamCard;
