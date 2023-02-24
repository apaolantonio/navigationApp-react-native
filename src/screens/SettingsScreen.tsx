import {View, Text} from 'react-native';

import {styles, colores} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View
      style={{
        ...styles.globalMargin,
        paddingTop: insets.top + 20,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {authState.favouriteIcon && (
        <Icon
          name={authState.favouriteIcon}
          color={colores.primary}
          size={150}
        />
      )}
    </View>
  );
};
