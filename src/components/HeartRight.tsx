import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface HeartRightProps {
	color?: string;
	widht?: number;
	height?: number;
}
const HeartRight = ({
	color = '#000000',
	widht = 10,
	height = 18,
}: HeartRightProps) => {
	return (
		<View>
			<Svg width={widht} height={height} viewBox="0 0 127 171">
				<Path
					fill={color}
					// fillRule="evenodd"
					stroke="#000"
					d="M11.465 87v92.996c16.922-.255 32.347-13.433 43.605-34.876 11.356-21.63 18.395-51.547 18.395-84.62 0-16.527-2.495-28.309-6.477-36.19-3.976-7.868-9.419-11.83-15.354-12.804-5.957-.978-12.514 1.036-18.728 5.34-6.21 4.301-12.036 10.864-16.504 18.897a37.101 37.101 0 0 1-1.672 2.716l-.269.4c-.366.544-.677 1.006-.953 1.486-.66 1.152-1.114 2.41-1.421 5.022-.62 5.276-.622 15.859-.622 41.633Z"
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

export default HeartRight;
