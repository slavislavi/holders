import React, {FC, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {ServicesList} from '@components/ServicesList';
import {useDispatch, useSelector} from 'react-redux';
import {getServicesDataAction} from '@store/actions/manageService';
import {
  dataFromDbSelector,
  isLoadingSelector,
} from '@store/selectors/manageService';
import {styles} from './styles';

export const Services: FC = () => {
  const loadingFromDb = useSelector(isLoadingSelector);
  const dataFromDb = useSelector(dataFromDbSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesDataAction.request());
  }, [dispatch]);

  return loadingFromDb ? (
    <ActivityIndicator style={styles.activityIndicator} />
  ) : (
    <ServicesList data={dataFromDb} />
  );
};
