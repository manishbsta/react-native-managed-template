import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParams = {
  AuthStack: NavigatorScreenParams<AuthStackParams>;
  HomeStack: NavigatorScreenParams<HomeStackParams>;
};

export type AuthStackParams = {
  Login: undefined;
};

export type HomeStackParams = {
  Home: undefined;
  Settings: undefined;
};

export type AuthStackNavigation = NativeStackNavigationProp<AuthStackParams>;
export type HomeStackNavigation = NativeStackNavigationProp<HomeStackParams>;
