import { Images } from '@/assets/images';
import { StyledText } from '@/components/styled/StyledText';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='handled'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <Image source={Images.mindMap} style={styles.image} resizeMode='contain' />
        <View style={styles.textContainer}>
          <StyledText variant='title' style={styles.title}>
            Welcome back 🤯
          </StyledText>
          <StyledText style={styles.description}>
            Take it from here and do your magic! 🪄🪄
          </StyledText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(() => ({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    gap: 16,
    paddingBottom: 80,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    height: 320,
    width: 320,
    marginTop: 60,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 20,
  },
}));

export default Home;
