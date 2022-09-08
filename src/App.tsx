import React, {FC, useLayoutEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StatusBar} from 'react-native';

import AppNavigation from '@router/index';

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <AppNavigation />
      {isLoading && <ActivityIndicator size="large" color="#000075" />}
    </SafeAreaView>
  );
};
