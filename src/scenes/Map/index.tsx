import React, {FC} from 'react';
import {Dimensions, SafeAreaView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {dataFromDbSelector} from '@store/selectors/manageService';
import {styles} from './styles';

const {width, height} = Dimensions.get('window');

export const Map: FC = () => {
  const dataFromDb = useSelector(dataFromDbSelector);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={{width: width, height: height}}
        initialRegion={{
          latitude: 41.62,
          longitude: 41.62,
          latitudeDelta: 0.1,
          longitudeDelta: 0.06,
        }}>
        {!!dataFromDb.length &&
          dataFromDb.map(service => (
            <Marker
              key={service.id}
              coordinate={{
                longitude: service.address.longitude,
                latitude: service.address.latitude,
              }}
              title={service.name}
              description={service.description}
            />
          ))}
      </MapView>
    </SafeAreaView>
  );
};
