import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../components';
import Triangle from '../components/TriangleSec';
import Heart from '../components/Heart';
import SquareSce from '../components/SquareSec';

const RountTable = () => {
	return (
		<View
			style={{
				flexDirection: 'row',
				transform: [{ translateX: 0 }, { translateY: 50 }],
			}}>
			<Triangle height={150} widht={100} color="blue" />
			<Heart height={300} widht={180} color="red" />
			<SquareSce height={300} widht={200} color="red" />
		</View>
	);
};

const styles = StyleSheet.create({
	posittion: {
		transform: [{ translateX: 0 }, { translateY: -200 }],
	},
});

export default RountTable;
