import { Images } from '@assets/images';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Image source={Images.logo} style={styles.logo} contentFit='contain' />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create(({ colors }) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  logo: {
    width: 150,
    height: 150,
  },
}));
