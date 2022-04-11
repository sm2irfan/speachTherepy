import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavRouter from './navigation/NavRouter';

const App = () => {
	return (
		<SafeAreaProvider>
			<NavRouter />
		</SafeAreaProvider>
	);
};

export default App;
