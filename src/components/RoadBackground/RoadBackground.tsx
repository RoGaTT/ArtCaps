/* eslint-disable react/no-array-index-key */
import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import clsx from 'clsx';

import classes from './RoadBackground.module.scss';
import { getScreenHeight, getScreenWidth } from '@/utils/functions/dom';
import { generateRandomIntNumber } from '@/utils/functions/generator';
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
  speed: number,
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

  const memoCreateLineItem = useCallback(createLineItem, []);
  const memoCreateItemSet = useCallback(createItemSet, [memoCreateLineItem, memoSectorsAmount]);

  useEffect(() => {
    const setList = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 3; i++) {
      setList.push(memoCreateItemSet());
    }
    setItemSetList(setList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={clsx(classes.root, className)}>
      {
        itemSetList.map((itemSet, itemSetIndex) => itemSet.map((item, itemIndex) => (
          <div
            className={clsx(classes.item, 'animate__animated')}
            key={`line_${itemSetIndex}-${itemIndex}`}
            style={{
              backgroundColor: item.color,
              width: item.width,
              height: item.height,
              left: (itemIndex * ROAD_CONFIG.sectorWidth) + item.position,
              animationDelay: `${item.delay * itemIndex * 5}ms`,
              animationDuration: `${item.speed}ms`,
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
      speed: generateRandomIntNumber(ROAD_CONFIG.line.speed.min, ROAD_CONFIG.line.speed.max),
    };
  }

  function createItemSet() {
    const itemSet: RoadItemConfigType[] = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < memoSectorsAmount; i++) {
      itemSet.push(memoCreateLineItem());
    }
    return itemSet;
  }
};

export default RoadBackground;
