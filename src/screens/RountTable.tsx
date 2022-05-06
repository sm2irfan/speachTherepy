import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../components';
import Triangle from '../components/TriangleSec';
import Heart from '../components/Heart';
import SquareSce from '../components/SquareSec';
import Arrowicon from '../components/Arrowicon';
import Rabit from '../components/bigSmallComponents/Rabbit';

const RountTable = () => {
	return (
		<View>
			<View
				style={{
					flexDirection: 'row',
					transform: [{ translateX: 0 }, { translateY: 50 }],
				}}>
				<Triangle height={100} widht={100} color="blue" />
				<Heart height={100} widht={180} color="red" />
				<SquareSce height={100} widht={200} color="red" />
			</View>
			<View
				style={{
					transform: [{ translateX: 100 }, { translateY: 200 }],
				}}>
				<Rabit height={350} widht={250} color="red" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	posittion: {
		transform: [{ translateX: 0 }, { translateY: -200 }],
	},
});

export default RountTable;
