import { Images } from '@assets/images';
import { StyledText } from '@src/components/_styled/StyledText';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        keyboardShouldPersistTaps='handled'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <Image
          source={Images.mindMap}
          style={{ height: 320, width: 320, marginTop: 60 }}
          resizeMode='contain'
        />
        <View style={{ justifyContent: 'center', alignItems: 'center', gap: 20 }}>
          <StyledText variant='title' style={{ textAlign: 'center' }}>
            Welcome back 🤯
          </StyledText>
          <StyledText style={{ textAlign: 'center', paddingHorizontal: 20 }}>
            Take it from here and do your magic! 🪄🪄
          </StyledText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(({ colors }) => ({
  contentContainer: {
    flexGrow: 1,
    gap: 16,
    paddingBottom: 80,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
}));

export default Home;
