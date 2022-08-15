import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Path, Polygon } from 'react-native-svg';

const Triangle = ({ color = '#000000', width = 10, height = 18 }) => {
	return (
		<View>
			<Svg
				width={width}
				height={height}
				viewBox="0 0 531.74 460.5"
				fill={color}>
				<Polygon
					stroke="#000000"
					points="0.866,460 265.87,1 530.874,460 "
				/>
			</Svg>
		</View>
	);
};

const styles = StyleSheet.create({
	posittion: {
		transform: [{ translateX: -180 }, { translateY: -150 }],
	},
});

export default Triangle;
