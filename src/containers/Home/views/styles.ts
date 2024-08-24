import { createStyleSheet } from 'react-native-unistyles';

import { ITheme } from '~types';

const stylesheet = createStyleSheet((theme: ITheme) => ({
  home_view_scrollView: {
    backgroundColor: theme.colors.background,
  },
  home_view_scrollView_container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));

export default stylesheet;
