import { Ionicons } from '@expo/vector-icons';
import StyledText from '@src/core/components/StyledText';
import React, { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type SettingTileProps = {
  label: string;
  onPress?: () => void;
  icon: ComponentProps<typeof Ionicons>['name'];
};
const SettingTile = ({ label, onPress, icon }: SettingTileProps) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={onPress} style={styles.container}>
      <Ionicons name={icon} size={22} style={styles.icon} />
      <StyledText numberOfLines={1}>{label}</StyledText>
    </TouchableOpacity>
  );
};

export default SettingTile;

const styles = StyleSheet.create(({ colors, margins, radii }) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: margins.base,
    paddingVertical: margins.base,
  },
  icon: {
    color: colors.text,
    padding: margins.sm,
    borderRadius: radii.rounded,
    backgroundColor: colors.light,
  },
}));
