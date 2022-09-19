import React, {FC} from 'react';
import {
  SafeAreaView,
  SectionList,
  SectionListRenderItem,
  Text,
} from 'react-native';
import {
  SectionCategoryType,
  SectionItemType,
} from '@components/ServicesList/types';
import {CustomText} from '@components/CustomText';
import {SERVICES_DATA} from '@components/ServicesList/data';
import {styles} from '@components/ServicesList/styles';

export const ServicesList: FC = () => {
  const renderItem: SectionListRenderItem<
    SectionItemType,
    SectionCategoryType
  > = ({item}) => {
    return <Text style={styles.item}>{item.name}</Text>;
  };

  const renderHeader = ({section}: {section: SectionCategoryType}) => {
    return (
      <CustomText style={styles.sectionHeader}>{section.title}</CustomText>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={SERVICES_DATA}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
