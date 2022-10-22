import React, {FC} from 'react';
import {SafeAreaView, SectionList, SectionListRenderItem} from 'react-native';
import {Props} from '@components/ServicesList/types';
import {CustomText} from '@components/CustomText';
import {styles} from '@components/ServicesList/styles';
import {mapDataFromDb, ServiceCategory} from '@utils/helpers/mapDataFromDb';
import {GetServiceDataResponse} from '@store/types';
import {CustomModal} from '@components/CustomModal';
import {mapTypeToLabel} from '@utils/helpers/mapTypeToLabel';
import {serviceItemsTypes} from '@constants/ServiceItemsTypes';

export const ServicesList: FC<Props> = data => {
  const renderItem: SectionListRenderItem<
    GetServiceDataResponse,
    ServiceCategory
  > = ({item}) => {
    return <CustomModal data={item} />;
  };

  const renderHeader = ({section}: {section: ServiceCategory}) => {
    return (
      <CustomText style={styles.sectionHeader}>
        {mapTypeToLabel(section.categoryTitle, serviceItemsTypes)}
      </CustomText>
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
