import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FC, PropsWithChildren } from 'react';
import { Modal as BaseModal, TextStyle, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { StyledText } from './StyledText';

export type StyledModalProps = PropsWithChildren & {
  visible: boolean;
  onClose?: () => void;
  title?: string;
  titleStyle?: TextStyle;
  dissmissable?: boolean;
};
export const StyledModal: FC<StyledModalProps> = ({
  visible,
  onClose,
  title,
  titleStyle,
  dissmissable = true,
  children,
}) => {
  return (
    <BaseModal
      transparent
      visible={visible}
      animationType='fade'
      statusBarTranslucent
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.backdrop} />
        <View style={styles.main}>
          <View style={styles.content}>
            {title ? (
              <View style={{ marginBottom: 12 }}>
                <View style={styles.header}>
                  <StyledText style={[{ flex: 1 }, titleStyle]} variant='subtitle'>
                    {title}
                  </StyledText>
                  {dissmissable ? (
                    <TouchableOpacity
                      onPress={onClose}
                      hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                      <MaterialCommunityIcons name='close' style={styles.closeIcon} />
                    </TouchableOpacity>
                  ) : null}
                </View>
                <View style={styles.divider} />
              </View>
            ) : null}
            {children}
          </View>
        </View>
      </View>
    </BaseModal>
  );
};

const styles = StyleSheet.create(({ colors }) => ({
  container: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    opacity: 0.4,
    backgroundColor: colors.disabled,
  },
  main: {
    zIndex: 300,
    height: '100%',
    width: '100%',
    padding: 18,
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  closeIcon: {
    fontSize: 24,
    color: colors.text,
  },
  divider: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
  },
}));
