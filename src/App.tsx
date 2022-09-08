import React, {FC, useLayoutEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import AppNavigation from './router';

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <AppNavigation />
      {isLoading && <ActivityIndicator size="large" color="#000075" />}
    </>
  );
};
