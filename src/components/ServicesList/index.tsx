import React, {FC} from 'react';
import {
  SafeAreaView,
  SectionList,
  SectionListRenderItem,
  Text,
} from 'react-native';
import {Props} from '@components/ServicesList/types';
import {CustomText} from '@components/CustomText';
import {styles} from '@components/ServicesList/styles';
import {mapDataFromDb, ServiceCategory} from '@utils/helpers/mapDataFromDb';
import {GetServiceDataResponse} from '@store/types';

export const ServicesList: FC<Props> = data => {
  const renderItem: SectionListRenderItem<
    GetServiceDataResponse,
    ServiceCategory
  > = ({item}) => {
    return <Text style={styles.item}>{item.name}</Text>;
  };

  const renderHeader = ({section}: {section: ServiceCategory}) => {
    return (
      <CustomText style={styles.sectionHeader}>{section.title}</CustomText>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={mapDataFromDb(data.data)}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
