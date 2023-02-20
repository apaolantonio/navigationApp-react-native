import {View, Text} from 'react-native';

import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.globalMargin,
        paddingTop: insets.top + 20,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};
