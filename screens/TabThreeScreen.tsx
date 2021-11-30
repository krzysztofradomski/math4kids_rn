import * as React from 'react';
import { StyleSheet } from 'react-native';

import Main from '../components/Main';
import { Text, View } from '../components/Themed';
import { calculations } from '../hooks/useMaths';

export default function TabThreeScreen() {
  const calculation = Object.keys(calculations)[2]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{calculation}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Main path="/screens/TabThreeScreen.tsx" calculation={calculation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
