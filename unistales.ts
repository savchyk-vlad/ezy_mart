import { UnistylesRegistry } from 'react-native-unistyles';
import { lightTheme, darkTheme } from './src/assets/theme/themes';
import { THEMES } from './src/constants';

type AppThemes = {
  [THEMES.LIGHT]: typeof lightTheme;
  [THEMES.DARK]: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  [THEMES.LIGHT]: lightTheme,
  [THEMES.DARK]: darkTheme,
}).addConfig({
  adaptiveThemes: true,
  initialTheme: THEMES.LIGHT,
});
