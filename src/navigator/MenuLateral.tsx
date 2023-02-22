import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
// import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        // Estilos para quitar el border del header
        headerStyle: {
          // Esto se utiliza en Android
          elevation: 0,
          // Esto se utiliza en iOS
          shadowColor: 'transparent',
        },
      }}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="flashlight-outline" size={30} color="black" />
          <Text style={styles.menuTexto}>Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="musical-notes-outline" size={30} color="black" />
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
