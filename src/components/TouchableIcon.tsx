import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

interface PropsIcons {
  iconName: string;
}
export const TouchableIcon = ({iconName}: PropsIcons) => {
  const {changeFavIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeFavIcon(iconName)}>
      <Icon name={iconName} size={50} color="#900" />
    </TouchableOpacity>
  );
};
