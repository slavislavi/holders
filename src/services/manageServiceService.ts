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
    if (data.photo) {
      const fileName = data.photo?.assets && data.photo?.assets[0].fileName;
      const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/${fileName}`;

      await storage().ref(fileName).putFile(pathToFile);

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
