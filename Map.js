import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View>
      <View></View>
      <MapView style={styles.map} />
    </View>
  );
};

const HeaderMap = () => {
  return <View></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
