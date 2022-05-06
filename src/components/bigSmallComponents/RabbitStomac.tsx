import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface RabbitHeadProps {
	color?: string;
	widht?: number;
	height?: number;
}
const RabbitHead = ({
	color = '#000000',
	widht = 10,
	height = 18,
}: RabbitHeadProps) => {
	return (
		<View>
			{/* <Svg width={widht} height={height} viewBox="0 0 127 171">
				<Path
					fill={color}
					// fillRule="evenodd"
					stroke="#000"
					d="M11.465 87v92.996c16.922-.255 32.347-13.433 43.605-34.876 11.356-21.63 18.395-51.547 18.395-84.62 0-16.527-2.495-28.309-6.477-36.19-3.976-7.868-9.419-11.83-15.354-12.804-5.957-.978-12.514 1.036-18.728 5.34-6.21 4.301-12.036 10.864-16.504 18.897a37.101 37.101 0 0 1-1.672 2.716l-.269.4c-.366.544-.677 1.006-.953 1.486-.66 1.152-1.114 2.41-1.421 5.022-.62 5.276-.622 15.859-.622 41.633Z"
				/>
			</Svg> */}

			<Svg width="72" height="93" fill="none" viewBox="0 0 72 93">
				<Path
					fill="#C94040"
					stroke="#000"
					d="M71.5 38.623c0 14.931-4.008 28.427-10.461 38.174C54.583 86.55 45.72 92.5 36 92.5s-18.583-5.951-25.039-15.703C4.508 67.05.5 53.555.5 38.623.5 23.72 5.23 14.216 11.96 8.429 18.707 2.629 27.533.5 35.827.5c8.295 0 17.21 2.13 24.042 7.93C66.685 14.22 71.5 23.724 71.5 38.624Z"
				/>
				<Path
					fill="#E68D8D"
					stroke="#000"
					d="M57.5 60.5c0 7.777-2.268 14.797-5.91 19.86-3.643 5.065-8.63 8.14-14.09 8.14-5.46 0-10.447-3.075-14.09-8.14-3.642-5.063-5.91-12.083-5.91-19.86 0-7.777 2.268-14.797 5.91-19.86 3.643-5.065 8.63-8.14 14.09-8.14 5.46 0 10.447 3.075 14.09 8.14 3.642 5.063 5.91 12.083 5.91 19.86Z"
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

export default RabbitHead;
