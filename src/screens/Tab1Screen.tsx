import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen');
  }, []);

  return (
    <View>
      <Text>Tab 1 Screen</Text>
      <TouchableIcon iconName="airplane-outline" />
      <TouchableIcon iconName="bandage-outline" />
      <TouchableIcon iconName="cash-outline" />
      <TouchableIcon iconName="globe-outline" />
    </View>
  );
};
