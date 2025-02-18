import { FontFamily } from '@assets/fonts';
import { DarkTheme, DefaultTheme as LightTheme, type Theme } from '@react-navigation/native';
import { useThemeContext } from '@src/contexts/ThemeContext';
import { darkTheme, lightTheme } from '@src/utils/unistyles';

const fontConfig: any = {
  regular: {
    fontFamily: FontFamily.regular,
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: FontFamily.medium,
    fontWeight: 'normal',
  },
  bold: {
    fontFamily: FontFamily.semibold,
    fontWeight: 'normal',
  },
  heavy: {
    fontFamily: FontFamily.bold,
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
