import React, {FC} from 'react';
import {Dimensions, SafeAreaView} from 'react-native';
import MapView from 'react-native-maps';
import {styles} from './styles';

const {width, height} = Dimensions.get('window');

export const Map: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={{width: width, height: height}}
        initialRegion={{
          latitude: 41.61,
          longitude: 41.62,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      />
    </SafeAreaView>
  );
};
