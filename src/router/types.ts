import type {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {DrawerScreenProps} from '@react-navigation/drawer';

export type DrawerStackProps = {
  About: {title: string} | undefined;
};

export type HomeTabProps = {
  Home: {title: string} | undefined;
  Edit: {title: string} | undefined;
  Map: {title: string} | undefined;
};

export type RootDrawerProps = {
  Home: NavigatorScreenParams<HomeTabProps>;
  DrawerStack: NavigatorScreenParams<DrawerStackProps>;
};

export type RootDrawerScreenProps<T extends keyof RootDrawerProps> =
  DrawerScreenProps<RootDrawerProps, T>;

export type HomeTabsScreenProps<T extends keyof HomeTabProps> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabProps, T>,
    RootDrawerScreenProps<keyof RootDrawerProps>
  >;

export type DrawerStackScreenProps<T extends keyof DrawerStackProps> =
  CompositeScreenProps<
    NativeStackScreenProps<DrawerStackProps, T>,
    RootDrawerScreenProps<keyof RootDrawerProps>
  >;
