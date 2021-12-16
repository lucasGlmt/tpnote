import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
  const [lat, setLat] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text>Quelle endroit voulez-vous afficher ?</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput value={lat} placeholder="Lat" style={styles.input} />
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <MapView style={styles.map} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
