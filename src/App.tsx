import React, {FC, useLayoutEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, Text} from 'react-native';

// import AppNavigation from '@router/index';
import {THEME} from '@styles/theme';

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <SafeAreaView>
      <Text>January February March April May June July August September</Text>
      {isLoading && <ActivityIndicator size="large" color={THEME.INFO} />}
    </SafeAreaView>
  );
};
