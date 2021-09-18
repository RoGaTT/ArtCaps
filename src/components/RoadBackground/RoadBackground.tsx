/* eslint-disable react/no-array-index-key */
import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import clsx from 'clsx';

import classes from './RoadBackground.module.scss';
import { getScreenHeight, getScreenWidth } from '@/utils/functions/dom';
import { generateNumArrayBySize, generateRandomIntNumber } from '@/utils/functions/generator';
import ROAD_CONFIG, { RoadItemTypeEnum, RoadLineColorEnum } from '@/const/road';

interface PropsType {
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

type RoadItemConfigType = {
  type: RoadItemTypeEnum,
  delay: number,
  position: number,
  width: number,
  height: number,
  color?: RoadLineColorEnum
}

const RoadBackground: FC<PropsType> = ({
  className,
}) => {
  const [itemSetList, setItemSetList] = useState<RoadItemConfigType[][]>([]);

  const memoScreenSize = useMemo(() => ({
    width: getScreenWidth(),
    height: getScreenHeight(),
  }), []);
  const memoSectorsAmount = useMemo(() => Math.ceil(memoScreenSize.width / 90), [memoScreenSize]);

  const memoSectorsComponents = useMemo(() => (
    <>
      {
        generateNumArrayBySize(memoSectorsAmount).map((el, elIndex) => (
          <div className={classes.sector} key={`sector_${elIndex}`}>
            dasda
          </div>
        ))
      }
    </>
  ), [memoSectorsAmount]);

  const memoCreateLineItem = useCallback(createLineItem, []);
  const memoCreateItemSet = useCallback(createItemSet, [itemSetList, memoCreateLineItem, memoSectorsAmount]);

  // useEffect(() => {
  //   setInterval(memoCreateItemSet, 2000);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   console.log(itemSetList);
  // }, [itemSetList]);

  return (
    <div className={clsx(classes.root, className)}>
      {
        itemSetList.map((itemSet, itemSetIndex) => itemSet.map((item, itemIndex) => (
          <div
            className={classes.item}
            key={`line_${itemSetIndex}-${itemIndex}`}
            style={{
              backgroundColor: item.color,
              width: item.width,
              height: item.height,
              left: itemSetIndex * ROAD_CONFIG.sectorWidth + item.position,
            }}
          />
        )))
      }
    </div>
  );

  function createLineItem(): RoadItemConfigType {
    const width = generateRandomIntNumber(ROAD_CONFIG.line.width.min, ROAD_CONFIG.line.width.max);
    return {
      type: RoadItemTypeEnum.Line,
      delay: generateRandomIntNumber(ROAD_CONFIG.line.delay.min, ROAD_CONFIG.line.delay.max),
      position: generateRandomIntNumber(0, ROAD_CONFIG.sectorWidth - width),
      width,
      height: generateRandomIntNumber(ROAD_CONFIG.line.height.min, ROAD_CONFIG.line.height.max),
      color: ROAD_CONFIG.line.color[generateRandomIntNumber(0, ROAD_CONFIG.line.color.length)],
    };
  }

  function createItemSet() {
    const itemSet: RoadItemConfigType[] = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < memoSectorsAmount; i++) {
      itemSet.push(memoCreateLineItem());
    }

    setItemSetList([...itemSetList, itemSet]);
  }
};

export default RoadBackground;
