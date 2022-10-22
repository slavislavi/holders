import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {utils} from '@react-native-firebase/app';
import {AddServiceParams, GetServiceDataResponse} from '@store/types';

export class ManageServiceService {
  static async getServicesFromDb() {
    const services: any = [];

    const servicesFromDb = await firestore().collection('services').get();

    servicesFromDb.forEach(doc =>
      services.push({
        id: doc.id,
        ...(doc.data() as Omit<GetServiceDataResponse, 'id'>),
      }),
    );
    return services;
  }

  static async addServiceToDb(data: AddServiceParams) {
    if (data.photo != null) {
      const fileName = data.photo;
      console.log('<addServiceToDb> submit fileName: ', fileName); // TO REMOVE

      const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/${fileName}`;
      console.log('<addServiceToDb> submit pathToFile: ', pathToFile); // TO REMOVE

      await storage().ref(fileName).putFile(pathToFile); // Вероятно проблема здесь

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
