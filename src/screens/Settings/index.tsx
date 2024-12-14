import { useAuthContext } from '@src/core/contexts/auth';
import { globalStyles } from '@src/utils/global-styles';
import React from 'react';
import { View } from 'react-native';
import SettingTile from './components/SettingTile';

const Settings = () => {
  const { logOut } = useAuthContext();

  return (
    <View style={globalStyles.screen}>
      <SettingTile label='Change Language' icon='language-outline' />
      <SettingTile label='About Application' icon='information-circle-outline' />
      <SettingTile label='Terms & Conditions' icon='newspaper-outline' />
      <SettingTile label='Report Bugs' icon='bug-outline' />
      <SettingTile label='Log Out' icon='log-out-outline' onPress={logOut} />
    </View>
  );
};

export default Settings;
