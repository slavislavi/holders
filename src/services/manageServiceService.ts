import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
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
      const pathToFile = data.photo;
      const fileName = `/images/${pathToFile.split('/').pop()}`;

      const uploadPathToFile =
        Platform.OS === 'ios' ? pathToFile.replace('file://', '') : pathToFile;

      await storage().ref(fileName).putFile(uploadPathToFile);

      const url = await storage().ref(fileName).getDownloadURL();

      const response = await firestore()
        .collection('services')
        .add({...data, photo: url});

      return response;
    } else {
      const response = await firestore().collection('services').add(data);
      return response;
    }
  }
}
