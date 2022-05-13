import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface HeartLeftProps {
	color?: string;
	width?: number;
	height?: number;
}
const HeartLeft = ({
	color = '#000000',
	width = 10,
	height = 18,
}: HeartLeftProps) => {
	return (
		<View>
			<Svg width={width} height={height} viewBox="0 0 127 171">
				<Path
					fill={color}
					// fillRule="evenodd"
					stroke="#000"
					d="M63.465 77v92.996c-16.922-.255-32.347-13.433-43.605-34.876C8.504 113.49 1.465 83.573 1.465 50.5c0-16.527 2.495-28.309 6.478-36.19C11.918 6.441 17.36 2.48 23.296 1.505 29.253.53 35.81 2.542 42.024 6.846c6.21 4.301 12.036 10.864 16.504 18.897a37.136 37.136 0 0 0 1.672 2.716l.269.4c.366.544.678 1.006.953 1.486.66 1.152 1.114 2.41 1.422 5.022.62 5.276.621 15.859.621 41.633Z"
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

export default HeartLeft;
