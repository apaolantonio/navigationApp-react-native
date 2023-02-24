import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {RootStackParams} from '../navigator/StackNavigator';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}
// interface RouterParams {
//   id: number;
//   nombre: string;
// }
export const PersonaScreen = ({navigation, route}: Props) => {
  const {changeUsername, authState} = useContext(AuthContext);

  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  useEffect(() => {
    changeUsername(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
