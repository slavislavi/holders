import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {utils} from '@react-native-firebase/app';
import {AddServiceParams, GetServiceDataResponse} from '@store/types';
import {Platform} from 'react-native';

export class ManageServiceService {
  static async getServicesFromDb() {
    const services = [] as GetServiceDataResponse[];

    const servicesFromDb = await firestore()
      .collection<Omit<GetServiceDataResponse, 'id'>>('services')
      .get();

    servicesFromDb.forEach(doc =>
      services.push({
        id: doc.id,
        ...doc.data(),
      }),
    );
    return services;
  }

  static async addServiceToDb(data: AddServiceParams) {
    if (data.photo) {
      const fileName = data.photo;
      console.log('<addServiceToDb> submit fileName: ', fileName); // TO REMOVE

      const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/${fileName}`;
      const uploadPathToFile =
        Platform.OS === 'ios' ? pathToFile.replace('file://', '') : pathToFile;
      console.log('<addServiceToDb> submit pathToFile: ', pathToFile); // TO REMOVE

      try {
        console.log('STARTED');
        await storage().ref(fileName).putFile(uploadPathToFile); // Вероятно проблема здесь
        console.log('FINiSHED');
      } catch (e) {
        console.log('<addServiceToDb> ERR: ', e);
      }

      const url = await storage().ref(fileName).getDownloadURL();
      console.log('<addServiceToDb> submit url: ', url); // TO REMOVE

      const response = await firestore()
        .collection('services')
        .add({...data, photo: url});
      console.log('<addServiceToDb> response: ', response); // TO REMOVE

      return response;
    } else {
      const response = await firestore().collection('services').add(data);
      console.log('<addServiceToDb> response without PHOTO: ', response); // TO REMOVE

      return response;
    }
  }
}
