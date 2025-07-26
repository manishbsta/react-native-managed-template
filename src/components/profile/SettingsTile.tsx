import { Ionicons } from '@expo/vector-icons';
import React, { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { StyledText } from '../styled/StyledText';

type SettingTileProps = {
  label: string;
  onPress?: () => void;
  icon: ComponentProps<typeof Ionicons>['name'];
};
const SettingsTile = ({ label, onPress, icon }: SettingTileProps) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={onPress} style={styles.container}>
      <Ionicons name={icon} size={22} style={styles.icon} />
      <StyledText numberOfLines={1}>{label}</StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(({ colors }) => ({
  container: {
    gap: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
    borderRadius: 999,
    color: colors.light,
    backgroundColor: colors.accent,
  },
}));

export default SettingsTile;
