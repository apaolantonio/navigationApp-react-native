import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

export const ContactScreen = () => {
  const {authState, signIn} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactScreen</Text>

      {!authState.isLoggedIn && <Button title="Sign in" onPress={signIn} />}
    </View>
  );
};
