import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const AlbumScreen = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View>
      <Text>AlbumScreen</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};
