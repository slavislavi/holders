import React, {FC, useEffect, useState} from 'react';
import {Text} from 'react-native';
import {ServicesList} from '@components/ServicesList';
import firestore from '@react-native-firebase/firestore';

export const Services: FC = () => {
  const [dataFromDb, setDataFromDb] = useState<any>();

  const fetchDataFromDb = async () => {
    const servicesFromDb = await firestore()
      .collection('services')
      .doc('jjC0u2t98edDXAheQYKJ')
      .get();
    console.log('fetchDataFromDb: ', servicesFromDb);
  };

  useEffect(() => {
    fetchDataFromDb();

    const subscriber = firestore()
      .collection('services')
      .onSnapshot(snapshot =>
        snapshot.forEach(doc => setDataFromDb(doc.data())),
      );

    return () => subscriber();
  }, []);

  return (
    <>
      <ServicesList />
      <Text>{dataFromDb?.type}</Text>
    </>
  );
};
