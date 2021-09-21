export enum RoadItemTypeEnum {
  Line = 'line',
  Chip = 'chip'
}

export enum RoadLineColorEnum {
  Blue = '#5254F9',
  Pink = '#F75AFD',
  Grey = '#848484',
  Purple = '#A26FFF',
  Yellow = '#FDCE0A'
}

type RoadConfigType = {
  line: {
    width: {
      min: number,
      max: number,
    },
    height: {
      min: number,
      max: number,
    },
    color: RoadLineColorEnum[],
    speed: {
      min: number,
      max: number,
    },
    delay: {
      min: number,
      max: number,
    }
  },
  sectorWidth: number
}

const ROAD_CONFIG: RoadConfigType = {
  line: {
    width: {
      min: 12,
      max: 16,
    },
    height: {
      min: 62,
      max: 154,
    },
    color: Object.values(RoadLineColorEnum),
    speed: {
      min: 7000,
      max: 20000,
    },
    delay: {
      min: 0,
      max: 200,
    },
  },
  sectorWidth: 90,
};

export default ROAD_CONFIG;
