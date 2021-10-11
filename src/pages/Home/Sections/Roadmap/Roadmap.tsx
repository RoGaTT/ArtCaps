/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, {
  FC, useCallback, useState,
} from 'react';
import clsx from 'clsx';

import classes from './Roadmap.module.scss';
import Container from '@/utils/components/Container';

import RoadmapTextImg from '@/assets/img/texts/roadmap.svg';
import RoadmapArrowYellowImg from '@/assets/img/icons/roadmap_arrow_yellow.svg';

interface PropsType {
  className?: string;
}

const Roadmap: FC<PropsType> = ({
  className,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [waitingDirection, setWaitingDirection] = useState<'left' | 'right' | null>(null);
  const [lastWaitingDirection, setLastWaitingDirection] = useState<'left' | 'right' | null>(null);
  const [touchStart, setTouchStart] = useState<null | number>(null);

  const memoOnTouchStart = useCallback(onTouchStart, []);
  const memoGetAnimationClass = useCallback(getAnimationClass, [lastWaitingDirection]);
  const memoOnSwitch = useCallback(onSwitch, []);
  const memoOnClick = useCallback(onClick, [activeSlideIndex, waitingDirection, memoOnSwitch]);
  const memoOnTouchEnd = useCallback(onTouchEnd, [activeSlideIndex, memoOnClick, touchStart]);

  return (
    <Container
      className={clsx(classes.root, className)}
      wrapperClassName={classes.wrapper}
    >
      <img src={RoadmapTextImg} alt="" />
      <div className={clsx(classes.content, classes.noMobile)}>
        <div className={classes.column}>
          <div className={classes.status}>
            <h6>Current status:</h6>
            <div className={classes['status-number']}>
              <span>0%</span>
              <span>0%</span>
            </div>
            <p>
              The first 100 tokens will be given away as prizes, gifts and used to build our team’s collection
            </p>
          </div>
          {/* <div className={classes.done}>
            <h6 className={classes.green}>Done:</h6>
            <div className={clsx(classes.checkpoint, classes.green)}>
              <span>20%</span>
              <p>
                NFT owners will be given away free exclusive gifts: T-shirts, caps and other unique merch!
              </p>
            </div>
          </div> */}
        </div>
        <div className={classes.column}>
          <div className={classes.title}>
            <h6>Next:</h6>
          </div>
          <div className={classes.next}>
            <div className={clsx(classes.checkpoint)}>
              <div>
                <span>20%</span>
              </div>
              <p>
                NFT owners will be given away free exclusive gifts: T-shirts, caps and other unique merch!
              </p>
            </div>
            <div className={clsx(classes.checkpoint)}>
              <div>
                <span>40%</span>
              </div>
              <p>
                10% from every token sale goes to charity
              </p>
            </div>
            <div className={clsx(classes.checkpoint)}>
              <div>
                <span>60%</span>
              </div>
              <p>
                Every NFT holder at this point will get 3 additional special tokens based on artists&apos; collections
              </p>
            </div>
            <div className={clsx(classes.checkpoint)}>
              <div>
                <span>80%</span>
              </div>
              <p>
                Another 10% from every token sale goes to charity
              </p>
            </div>
            <div className={clsx(classes.checkpoint)}>
              <div>
                <span>100%</span>
              </div>
              <p>
                New unique tokens: 3D Beeper, EroticCaps and many others. The future is closer than you think
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(classes.content, classes.onlyMobile)} onTouchStart={memoOnTouchStart} onTouchEnd={memoOnTouchEnd}>
        {
          activeSlideIndex === 0 && (
            <div className={clsx(
              classes.mobileColumn,
              'animate__animated',
              memoGetAnimationClass(waitingDirection),
            )}
            >
              <div className={classes.status}>
                <h6>Current status:</h6>
                <div className={classes['status-number']}>
                  <span>0%</span>
                  <span>0%</span>
                </div>
                <p>
                  The first 100 tokens will be given away as prizes, gifts and used to build our team’s collection
                </p>
              </div>
              <div className={classes.next}>
                <h6>Next:</h6>
                <div onClick={memoOnClick(1)} className={clsx(classes.checkpoint)}>
                  <span>20%</span>
                  <p>
                    NFT owners will be given away free exclusive gifts: T-shirts, caps and other unique merch!
                  </p>
                  <img src={RoadmapArrowYellowImg} alt="" />
                </div>
              </div>
              {/* <div className={classes.done}>
                <h6 className={classes.green}>Done:</h6>
                <div onClick={memoOnClick(2)} className={clsx(classes.checkpoint, classes.green)}>
                  <span>20%</span>
                  <p>
                    NFT owners will be given away free exclusive gifts: T-shirts, caps and other unique merch!
                  </p>
                  <img src={RoadmapArrowGreenImg} alt="" />
                </div>
              </div> */}
            </div>
          )
        }
        {
          activeSlideIndex === 1 && (
            <div className={clsx(
              classes.mobileColumn,
              'animate__animated',
              memoGetAnimationClass(waitingDirection),
            )}
            >
              <div className={classes.title}>
                <h6>Next:</h6>
              </div>
              <div className={classes.next}>
                <div className={clsx(classes.checkpoint)}>
                  <div>
                    <span>20%</span>
                  </div>
                  <p>
                    NFT owners will be given away free exclusive gifts: T-shirts, caps and other unique merch!
                  </p>
                </div>
                <div className={clsx(classes.checkpoint)}>
                  <div>
                    <span>40%</span>
                  </div>
                  <p>
                    10% from every token sale goes to charity
                  </p>
                </div>
                <div className={clsx(classes.checkpoint)}>
                  <div>
                    <span>60%</span>
                  </div>
                  <p>
                    Every NFT holder at this point will get 3 additional special tokens based on artists&apos; collections
                  </p>
                </div>
                <div className={clsx(classes.checkpoint)}>
                  <div>
                    <span>80%</span>
                  </div>
                  <p>
                    Another 10% from every token sale goes to charity
                  </p>
                </div>
                <div className={clsx(classes.checkpoint)}>
                  <div>
                    <span>100%</span>
                  </div>
                  <p>
                    New unique tokens: 3D Beeper, EroticCaps and many others. The future is closer than you think
                  </p>
                </div>
              </div>
            </div>
          )
        }
        {
          activeSlideIndex === 2 && (
            <div className={clsx(
              classes.mobileColumn,
              'animate__animated',
              memoGetAnimationClass(waitingDirection),
            )}
            >
              <div className={clsx(classes.title, classes.green)}>
                <h6>Done:</h6>
              </div>
              <div className={classes.next}>
                <div className={clsx(classes.checkpoint, classes.green)}>
                  <div>
                    <span>20%</span>
                  </div>
                  <p>
                    NFT owners will be given away free exclusive gifts: T-shirts, caps and other unique merch!
                  </p>
                </div>
                <div className={clsx(classes.checkpoint, classes.green)}>
                  <div>
                    <span>40%</span>
                  </div>
                  <p>
                    10% from every token sale goes to charity
                  </p>
                </div>
                <div className={clsx(classes.checkpoint, classes.green)}>
                  <div>
                    <span>60%</span>
                  </div>
                  <p>
                    Every NFT holder at this point will get 3 additional special tokens based on artists&apos; collections
                  </p>
                </div>
                <div className={clsx(classes.checkpoint, classes.green)}>
                  <div>
                    <span>80%</span>
                  </div>
                  <p>
                    Another 10% from every token sale goes to charity
                  </p>
                </div>
                <div className={clsx(classes.checkpoint, classes.green)}>
                  <div>
                    <span>100%</span>
                  </div>
                  <p>
                    New unique tokens: 3D Beeper, EroticCaps and many others. The future is closer than you think
                  </p>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <div className={clsx(classes.controls, classes.onlyMobile)}>
        <div
          className={
            clsx(
              classes['controls-item'],
              activeSlideIndex === 0 && classes['controls-item__status'],
            )
          }
          onClick={memoOnClick(0)}
        />
        <div
          className={
            clsx(
              classes['controls-item'],
              activeSlideIndex === 1 && classes['controls-item__next'],
            )
          }
          onClick={memoOnClick(1)}
        />
        {/* <div
          className={
            clsx(
              classes['controls-item'],
              activeSlideIndex === 2 && classes['controls-item__done'],
            )
          }
          onClick={memoOnClick(2)}
        /> */}
      </div>
    </Container>
  );

  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    setTouchStart(e.touches[0].clientX);
  }
  function onTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (touchStart === null) return;

    if (Math.abs(touchStart - e.changedTouches[0].pageX) <= 80) return;

    if ((touchStart !== null) && (touchStart > e.changedTouches[0].pageX)) {
      memoOnClick((activeSlideIndex + 1) % 2)();
      setTouchStart(null);
    } else if ((touchStart !== null) && (touchStart < e.changedTouches[0].pageX)) {
      memoOnClick(activeSlideIndex === 0 ? 1 : (activeSlideIndex - 1) % 2)();
      setTouchStart(null);
    }
  }

  function onClick(index: number) {
    return () => {
    // eslint-disable-next-line max-len
      if (waitingDirection) return;
      if (index > activeSlideIndex) memoOnSwitch('right', index);
      else memoOnSwitch('left', index);
    };
  }

  function onSwitch(direction: 'left' | 'right', nextItemIndex: number) {
    setWaitingDirection(direction);
    setTimeout(() => {
      setActiveSlideIndex(nextItemIndex);
      setLastWaitingDirection(direction);
      setWaitingDirection(null);
    }, 500);
  }

  function getAnimationClass(direction: 'left' | 'right' | null) {
    let className = 'animate__fadeInLeft';
    if (direction) {
      if (direction === 'left') className = 'animate__fadeOutRight';
      else className = 'animate__fadeOutLeft';
    } else if (lastWaitingDirection) {
      if (lastWaitingDirection === 'left') className = 'animate__fadeInLeft';
      else className = 'animate__fadeInRight';
    }
    return className;
  }
};

export default Roadmap;
