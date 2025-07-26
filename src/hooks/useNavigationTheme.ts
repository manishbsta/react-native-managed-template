import { useThemeContext } from '@/contexts/theme.context';
import { DarkTheme, DefaultTheme as LightTheme, type Theme } from '@react-navigation/native';
import { darkTheme, lightTheme } from '../unistyles';
import { fonts } from '../unistyles/tokens';

const fontConfig: any = {
  regular: {
    fontFamily: fonts.regular,
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: fonts.medium,
    fontWeight: 'normal',
  },
  bold: {
    fontFamily: fonts.bold,
    fontWeight: 'normal',
  },
  heavy: {
    fontFamily: fonts.bold,
    fontWeight: 'normal',
  },
};

const useNavigationTheme = () => {
  const { theme } = useThemeContext();

  let appTheme: Theme = {
    ...LightTheme,
    dark: false,
    fonts: fontConfig,
    colors: {
      ...LightTheme.colors,
      ...lightTheme.colors,
    },
  };

  if (theme === 'dark') {
    appTheme = {
      ...DarkTheme,
      dark: true,
      fonts: fontConfig,
      colors: {
        ...DarkTheme.colors,
        ...darkTheme.colors,
      },
    };
  }

  return appTheme;
};

export default useNavigationTheme;
