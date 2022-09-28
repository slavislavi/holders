import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {utils} from '@react-native-firebase/app';
import {AddServiceParams, GetServiceDataResponse} from '@store/types';

export class ManageServiceService {
  static async getServicesFromDb() {
    const services = [] as GetServiceDataResponse[];

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
    const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/${data.photo?.assets[0].fileName}`;

    await storage().ref(data.photo?.assets[0].fileName).putFile(pathToFile);

    const url = await storage()
      .ref(data.photo?.assets[0].fileName)
      .getDownloadURL();

    const response = await firestore()
      .collection('services')
      .add({...data, photo: url});

    return response;
  }
}
