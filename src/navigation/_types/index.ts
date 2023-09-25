import { NavigationProp } from '@react-navigation/native';

export type RootStackParams = {
	login: undefined;
	main_stack: NavigationProp<MainStackParams>;
};

export type MainStackParams = {
	home: undefined;
};
