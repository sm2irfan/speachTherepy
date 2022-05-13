import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ArrowProps {
	color?: string;
	width?: number;
	height?: number;
}
const Heart = ({ color = '#000000', width = 10, height = 18 }: ArrowProps) => {
	return (
		<View>
			<Svg width={width} height={height} viewBox="0 0 100 100">
				<Path
					x={0}
					y={7}
					fill={color}
					fillRule="evenodd"
					d="M 84.646 11.504 C 75.554 1.233 58.335 -0.041 45 13.074 C 31.665 -0.041 14.446 1.233 5.354 11.504 c -9.671 10.926 -5.609 31.318 7.123 47.615 C 18.931 67.38 34.874 80.832 45 86.481 c 10.126 -5.649 26.069 -19.101 32.523 -27.362 C 90.255 42.822 94.318 22.43 84.646 11.504 z"
				/>
			</Svg>
		</View>
	);
};

const styles = StyleSheet.create({
	posittion: {
		transform: [{ translateX: 0 }, { translateY: -200 }],
	},
});

export default Heart;
