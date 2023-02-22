import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen');
  }, []);

  return (
    <View>
      <Text>Tab 1 Screen</Text>
      <Text>
        <Icon name="airplane-outline" size={50} color="#900" />
      </Text>
    </View>
  );
};
