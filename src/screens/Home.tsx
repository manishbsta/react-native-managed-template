import { Images } from '@assets/images';
import { useNavigation } from '@react-navigation/native';
import StyledText from '@src/core/components/StyledText';
import { HomeStackNavigation } from '@src/navigation/types';
import { wW } from '@src/utils/dimensions';
import { globalStyles } from '@src/utils/global-styles';
import { Image } from 'expo-image';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const Home = () => {
  const navigation = useNavigation<HomeStackNavigation>();

  return (
    <View style={globalStyles.screen}>
      <View style={styles.content}>
        <Image source={Images.happy} style={styles.happyImage} />
        <StyledText style={[globalStyles.titleText, styles.text]}>Welcome Home!</StyledText>
        <StyledText style={[globalStyles.subtitleText, styles.text]}>
          This is where you rock!!
        </StyledText>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <StyledText style={styles.settingsText}> Go to Settings </StyledText>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create(({ margins: margins, colors }) => ({
  content: {
    marginTop: margins.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  happyImage: {
    width: wW * 0.65,
    height: wW * 0.65,
    marginBottom: margins.xl,
  },
  text: {
    textAlign: 'center',
    marginBottom: margins.xxs,
  },
  settingsText: {
    textAlign: 'center',
    color: colors.primary,
    marginVertical: margins.xxl,
    textDecorationLine: 'underline',
  },
}));
