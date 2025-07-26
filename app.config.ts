import { ConfigContext, ExpoConfig } from '@expo/config';

const isDevVariant = process.env.APP_VARIANT === 'development';

function getApplicatioName() {
  if (isDevVariant) {
    return 'RN Template (Dev)';
  }
  return 'RN Template';
}

function getBundlerIdentifier() {
  if (isDevVariant) {
    return 'com.wdftech.rnmt.dev';
  }
  return 'com.wdftech.rnmt';
}

export default (context: ConfigContext): ExpoConfig => ({
  ...context,
  name: getApplicatioName(),
  slug: 'react-native-managed-template',
  scheme: 'rnmt',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icons/icon.png',
  userInterfaceStyle: 'light',
  newArchEnabled: true,
  ios: {
    supportsTablet: false,
    bundleIdentifier: getBundlerIdentifier(),
  },
  android: {
    package: getBundlerIdentifier(),
    adaptiveIcon: {
      foregroundImage: './assets/icons/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  plugins: [
    'expo-router',
    'expo-secure-store',
    'react-native-edge-to-edge',
    [
      'expo-splash-screen',
      {
        imageWidth: 200,
        backgroundColor: '#f7f7f7',
        image: './assets/icons/splash-icon.png',
        dark: {
          imageWidth: 200,
          backgroundColor: '#f7f7f7',
          image: './assets/icons/splash-icon.png',
        },
      },
    ],
    [
      'expo-dev-client',
      {
        launchMode: 'most-recent',
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: '4ab1b770-d403-4804-bbd3-2b9b26f1bda0',
    },
  },
});
