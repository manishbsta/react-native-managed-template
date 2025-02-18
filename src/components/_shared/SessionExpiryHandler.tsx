import { useAuthContext } from '@src/contexts/AuthContext';
import { useGlobalSnapshot } from '@src/store';
import React from 'react';
import { View } from 'react-native';
import StyledButton from '../_styled/StyledButton';
import StyledModal from '../_styled/StyledModal';
import { StyledText } from '../_styled/StyledText';

const SessionExpiryHandler: React.FC = () => {
  const { logOut } = useAuthContext();
  const { sessionExpired } = useGlobalSnapshot();

  if (!sessionExpired) return null;

  return (
    <StyledModal
      onClose={logOut}
      dissmissable={false}
      visible={sessionExpired}
      title={'Session Expired'}>
      <View style={{ gap: 15 }}>
        <StyledText variant='body' style={{ fontSize: 15 }}>
          Your session has expired. Please log in again.
        </StyledText>
        <View style={{ alignSelf: 'flex-end' }}>
          <StyledButton
            compact
            variant='secondary'
            title='Log Out'
            icon='log-out-outline'
            iconPosition='right'
            onPress={logOut}
          />
        </View>
      </View>
    </StyledModal>
  );
};

export default SessionExpiryHandler;
