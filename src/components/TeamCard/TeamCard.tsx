/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import React, {
  FC,
} from 'react';
import clsx from 'clsx';

import classes from './TeamCard.module.scss';

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
}) => (
  <div className={clsx(classes.root, className)}>
    <div>
      <img src={img} alt="" />
      {/* <div>
          <span>{role()}</span>
          {
            twitterBio && (
              <a onClick={memoOnLinkClick(`https://twitter.com/${twitterBio}`)} target="_blank" rel="noreferrer">
                <img src={TwitterIcon} alt="" />
              </a>
            )
          }
        </div> */}
    </div>
    <span>{nickname}</span>
  </div>
);

export default TeamCard;
