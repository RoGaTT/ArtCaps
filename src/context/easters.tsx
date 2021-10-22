/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export enum EasterTypeEnum {
  MINT_BUTTON = 'mint_button',
  CHIP_SET_ITEM = 'chip_set_item',
  COLLECTION_LETTER = 'collection_letter',
  ROADMAP_FINAL = 'roadmap_final',
  BOSS_TWITTER = 'boss_twitter'
}

type EastersContextType = {
  easterList: EasterTypeEnum[],
  activateEaster: { (type: EasterTypeEnum): void },
  isModeActive: boolean
}

const EastersContext = React.createContext<EastersContextType>({
  easterList: [],
  activateEaster: () => {},
  isModeActive: false,
});

export default EastersContext;
