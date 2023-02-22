import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactScreen} from '../screens/ContactScreen';
import {AlbumScreen} from '../screens/AlbumScreen';
import {colores} from '../theme/appTheme';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();
export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'diamond-outline';
              break;
            case 'Contact':
              iconName = 'ear-outline';
              break;
            case 'Album':
              iconName = 'golf-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={colores.primary} />;
        },
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {backgroundColor: colores.primary},
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
};
