import SettingsTile from '@/components/Profile/SettingsTile';
import { useAuthContext } from '@/contexts/auth.context';
import { useThemeContext } from '@/contexts/theme.context';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

const Profile = () => {
  const { theme, updateTheme } = useThemeContext();
  const { logOut } = useAuthContext();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <SettingsTile
          label='Toggle Theme'
          icon={theme === 'light' ? 'sunny-outline' : 'moon'}
          onPress={() => updateTheme(theme === 'light' ? 'dark' : 'light')}
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

const styles = StyleSheet.create(() => ({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    paddingBottom: 80,
  },
}));

export default Profile;
