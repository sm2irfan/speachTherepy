import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ArrowProps {
	color?: string;
	widht?: number;
	height?: number;
}
const Arrowicon = ({
	color = '#000000',
	widht = 10,
	height = 18,
}: ArrowProps) => {
	return (
		<View>
			<Svg width={widht} height={height} viewBox="0 0 127 171">
				<Path
					// fill={color}
					// fillRule="evenodd"
					stroke="#000"
					d="M63.465 77v92.996c-16.922-.255-32.347-13.433-43.605-34.876C8.504 113.49 1.465 83.573 1.465 50.5c0-16.527 2.495-28.309 6.478-36.19C11.918 6.441 17.36 2.48 23.296 1.505 29.253.53 35.81 2.542 42.024 6.846c6.21 4.301 12.036 10.864 16.504 18.897a37.136 37.136 0 0 0 1.672 2.716l.269.4c.366.544.678 1.006.953 1.486.66 1.152 1.114 2.41 1.422 5.022.62 5.276.621 15.859.621 41.633Zm1 0c0-25.774.001-36.358.622-41.633.307-2.611.76-3.87 1.421-5.022.276-.48.587-.942.953-1.486l.27-.4a37.101 37.101 0 0 0 1.671-2.716C73.87 17.71 79.697 11.147 85.906 6.846 92.12 2.542 98.677.53 104.634 1.506c5.935.974 11.378 4.936 15.354 12.803 3.982 7.882 6.477 19.664 6.477 36.191 0 33.073-7.039 62.99-18.395 84.62-11.257 21.443-26.683 34.621-43.605 34.876V77Z"
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

export default Arrowicon;
