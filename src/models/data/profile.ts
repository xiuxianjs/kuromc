export enum E_Profile_Key {
  '气动' = '气动',
  '导电' = '导电',
  '热熔' = '热熔',
  '衍射' = '衍射',
  '冷凝' = '冷凝',
  '湮灭' = '湮灭'
}

export type TProfile = {
  key: string;
  name: string;
  icon: string;
};

// Importing icons using import statements
import windIcon from '@src/assets/image/IconElement/T_IconElementWind3.png';
import thunderIcon from '@src/assets/image/IconElement/T_IconElementThunder3.png';
import fireIcon from '@src/assets/image/IconElement/T_IconElementFire3.png';
import lightIcon from '@src/assets/image/IconElement/T_IconElementLight3.png';
import iceIcon from '@src/assets/image/IconElement/T_IconElementIce3.png';
import darkIcon from '@src/assets/image/IconElement/T_IconElementDark3.png';

export default {
  气动: {
    key: 'Wind',
    name: '气动',
    icon: windIcon
  },
  导电: {
    key: 'Thunder',
    name: '导电',
    icon: thunderIcon
  },
  热熔: {
    key: 'Fire',
    name: '热熔',
    icon: fireIcon
  },
  衍射: {
    key: 'Light',
    name: '衍射',
    icon: lightIcon
  },
  冷凝: {
    key: 'Ice',
    name: '冷凝',
    icon: iceIcon
  },
  湮灭: {
    key: 'Dark',
    name: '湮灭',
    icon: darkIcon
  }
} as Record<E_Profile_Key, TProfile>;
