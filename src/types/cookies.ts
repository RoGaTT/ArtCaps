import { EasterTypeEnum } from '@/context/easters';

/* eslint-disable import/prefer-default-export */
export enum CookiesEnum {
  IS_EASTER_MODE_ACTIVATED = 'is_easter_mode_activated',
  EASTER_LIST = 'easter_list'
}

export type CookiesConfigType = {
  [CookiesEnum.EASTER_LIST]: EasterTypeEnum[],
  [CookiesEnum.IS_EASTER_MODE_ACTIVATED]: boolean
}
