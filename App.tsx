import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { Provider as StoreProvider } from 'react-redux';

import RootNavigation from './src/navigation';
import { store } from './src/store';

SplashScreen.preventAutoHideAsync();
export default function App() {
	return (
		<StoreProvider store={store}>
			<StatusBar style='auto' />
			<NavigationContainer>
				<RootNavigation />
			</NavigationContainer>
		</StoreProvider>
	);
}
