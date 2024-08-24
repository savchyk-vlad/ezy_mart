import { createStyleSheet } from 'react-native-unistyles';

import { ITheme } from '~types';

//@ts-ignore
export const navigationOptions = createStyleSheet((theme: ITheme) => ({
  drawerStyle: {
    backgroundColor: '#fff',
    width: '86%',
  },
}));
