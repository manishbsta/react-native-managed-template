import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import RootNavigation from './src/navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	return (
		<>
			<StatusBar style='auto' />
			<NavigationContainer>
				<RootNavigation />
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
