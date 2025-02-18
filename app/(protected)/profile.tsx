import SettingsTile from '@src/components/Profile/SettingsTile';
import { useAuthContext } from '@src/contexts/AuthContext';
import { useThemeContext } from '@src/contexts/ThemeContext';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

const Profile = () => {
  const { logOut } = useAuthContext();
  const { updateTheme } = useThemeContext();
  const themeName = UnistylesRuntime.themeName;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <SettingsTile
          label='Toggle Theme'
          icon={themeName === 'light' ? 'sunny-outline' : 'moon'}
          onPress={() => updateTheme(themeName === 'light' ? 'dark' : 'light')}
        />
        <SettingsTile label='Change Language' icon='language-outline' />
        <SettingsTile label='About Application' icon='information-circle-outline' />
        <SettingsTile label='Terms & Conditions' icon='newspaper-outline' />
        <SettingsTile label='Report Bugs' icon='bug-outline' />
        <SettingsTile label='Log Out' icon='log-out-outline' onPress={logOut} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(({ colors }) => ({
  contentContainer: {
    flex: 1,
    padding: 16,
    paddingBottom: 80,
  },
}));

export default Profile;
