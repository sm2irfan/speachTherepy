import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface RabitProps {
	color?: string;
	widht?: number;
	height?: number;
}
const Rabiticon = ({
	color = '#000000',
	widht = 10,
	height = 18,
}: RabitProps) => {
	return (
		<View>
			{/* <Svg width={widht} height={height} viewBox="0 0 127 171">
				<Path
					// fill={color}
					// fillRule="evenodd"
					stroke="#000"
					d="M63.465 77v92.996c-16.922-.255-32.347-13.433-43.605-34.876C8.504 113.49 1.465 83.573 1.465 50.5c0-16.527 2.495-28.309 6.478-36.19C11.918 6.441 17.36 2.48 23.296 1.505 29.253.53 35.81 2.542 42.024 6.846c6.21 4.301 12.036 10.864 16.504 18.897a37.136 37.136 0 0 0 1.672 2.716l.269.4c.366.544.678 1.006.953 1.486.66 1.152 1.114 2.41 1.422 5.022.62 5.276.621 15.859.621 41.633Zm1 0c0-25.774.001-36.358.622-41.633.307-2.611.76-3.87 1.421-5.022.276-.48.587-.942.953-1.486l.27-.4a37.101 37.101 0 0 0 1.671-2.716C73.87 17.71 79.697 11.147 85.906 6.846 92.12 2.542 98.677.53 104.634 1.506c5.935.974 11.378 4.936 15.354 12.803 3.982 7.882 6.477 19.664 6.477 36.191 0 33.073-7.039 62.99-18.395 84.62-11.257 21.443-26.683 34.621-43.605 34.876V77Z"
				/>
			</Svg> */}
			<Svg
				width={widht}
				height={height}
				fill="none"
				viewBox="0 0 248 350">
				<Path fill="none" d="M0 0h248v350H0z" />
				<Path
					// fill="#E9CECE"
					stroke="#000"
					d="M159.883 209.024c0 14.931-4.008 28.427-10.461 38.174-6.456 9.752-15.319 15.703-25.039 15.703-9.721 0-18.584-5.951-25.04-15.703-6.453-9.747-10.46-23.243-10.46-38.174 0-14.903 4.73-24.407 11.46-30.194 6.745-5.8 15.571-7.929 23.866-7.929s17.209 2.129 24.041 7.931c6.817 5.788 11.633 15.292 11.633 30.192Z"
				/>
				<Path
					// fill="#F9ECEC"
					stroke="#000"
					d="M145.883 230.901c0 7.777-2.269 14.797-5.911 19.861-3.642 5.064-8.63 8.139-14.089 8.139-5.46 0-10.448-3.075-14.09-8.139-3.642-5.064-5.91-12.084-5.91-19.861 0-7.777 2.268-14.797 5.91-19.861 3.642-5.064 8.63-8.139 14.09-8.139 5.459 0 10.447 3.075 14.089 8.139 3.642 5.064 5.911 12.084 5.911 19.861Z"
				/>
				<Path
					// fill="#E6C9C9"
					stroke="#000"
					d="m108.237 101.922-.113.034-.085.081c-.841.796-1.669 1.036-2.502.888-.868-.154-1.826-.746-2.86-1.8-2.065-2.108-4.24-5.87-6.393-10.709-4.295-9.652-8.414-23.38-11.41-36.112-1.12-6.967-1.3-11.945-.916-15.49.384-3.55 1.33-5.622 2.42-6.828 1.788-1.976 4.05-1.777 5.6-1.642.34.03.646.057.904.057.342 0 .803-.09 1.283-.186l.138-.026a17.44 17.44 0 0 1 1.903-.29c1.406-.12 3.045.003 4.678.936 3.27 1.869 6.753 7.136 8 21.11.594 6.644 1.548 12.908 2.464 18.613.129.807.258 1.602.385 2.385.771 4.764 1.47 9.088 1.852 12.883.445 4.427.447 8.065-.342 10.795-.778 2.69-2.316 4.482-5.006 5.301Z"
				/>
				<Path
					// fill="#FFEFEF"
					stroke="#000"
					d="M108.637 80.225c.797 4.309.969 8.291.614 11.24-.178 1.478-.484 2.667-.891 3.502-.412.846-.877 1.235-1.327 1.318-.449.083-1.022-.113-1.71-.756-.679-.634-1.391-1.634-2.086-2.95-1.387-2.627-2.652-6.407-3.45-10.716-.798-4.309-.97-8.291-.615-11.24.178-1.478.485-2.667.892-3.502.412-.846.876-1.235 1.326-1.318.45-.083 1.023.113 1.71.756.679.634 1.391 1.634 2.086 2.95 1.388 2.626 2.653 6.407 3.451 10.716Z"
				/>
				<Path
					// fill="#E9CECE"
					stroke="#000"
					d="m145.477 104.748-.05-.058-.064-.04c-1.931-1.207-3.578-1.928-4.927-2.518l-.215-.094c-1.407-.617-2.407-1.083-3.138-1.817-.708-.71-1.203-1.72-1.452-3.513-.251-1.805-.245-4.355.018-8.1l.001-.017v-.017c0-13.58 2.865-31.07 7.286-44.532 2.212-6.735 4.8-12.42 7.587-16.1 1.393-1.84 2.811-3.146 4.226-3.847 1.397-.691 2.795-.797 4.212-.23 3.108 1.243 5.308 2.462 6.785 3.986 1.458 1.504 2.244 3.34 2.446 5.902.203 2.583-.189 5.886-1.092 10.29-.901 4.398-2.301 9.854-4.09 16.732-2.732 10.503-6.574 22.4-10.106 31.23-1.767 4.418-3.447 8.044-4.862 10.34-.713 1.158-1.329 1.926-1.82 2.301-.245.187-.409.237-.5.24-.062.002-.138-.014-.245-.138Z"
				/>
				<Path
					// fill="#FFF2F2"
					stroke="#000"
					d="M150.595 82.133c-1.251 4.035-2.92 7.5-4.592 9.84-.837 1.172-1.659 2.038-2.408 2.558-.756.524-1.363.647-1.826.503-.463-.144-.894-.588-1.221-1.448-.324-.852-.511-2.032-.538-3.472-.055-2.876.53-6.676 1.781-10.71 1.251-4.035 2.92-7.5 4.591-9.84.838-1.173 1.659-2.04 2.409-2.559.756-.524 1.363-.646 1.826-.503.463.144.894.588 1.221 1.448.324.853.511 2.032.538 3.472.055 2.876-.53 6.677-1.781 10.711Z"
				/>
				<Path
					// fill="#E9CECE"
					stroke="#000"
					d="m65.217 258.747-.202-.182-.263.071c-1.993.537-3.499.381-4.594-.262-1.095-.644-1.878-1.832-2.3-3.569-.853-3.499-.184-8.991 2.033-15.713 4.421-13.406 14.897-31.387 30.845-47.338.3-.299.536-.507.72-.64l.067-.048v.058c-.009.407-.12 1.046-.309 1.906-.145.656-.33 1.414-.535 2.259l-.188.771c-1.113 4.6-2.628 11.31-1.606 16.93.375 2.062.716 3.384.96 4.33.083.323.155.601.213.851.114.49.174.86.177 1.243.003.384-.05.805-.188 1.391-.21.9-.603 2.129-1.24 4.128a868.9 868.9 0 0 0-.713 2.243c-1.067 3.38-2.588 8.325-4.693 15.808-1.123 3.993-2.242 7.534-3.442 10.461-1.203 2.933-2.472 5.21-3.878 6.706-1.393 1.482-2.892 2.171-4.599 2.017-1.741-.158-3.798-1.2-6.265-3.421Z"
				/>
				<Path stroke="#000" d="m68.022 247.404-4.464 10.053" />
				<Path
					stroke="#000"
					d="M0-.5h18.108"
					transform="matrix(-.41437 .9101 -.90232 -.43108 74.886 244.401)"
				/>
				<Path
					// fill="#E9CECE"
					stroke="#000"
					d="m183.721 260.247.202-.182.263.071c1.992.537 3.499.381 4.594-.262 1.095-.644 1.877-1.832 2.3-3.569.852-3.499.184-8.991-2.033-15.713-4.422-13.406-14.897-31.387-30.845-47.338a6.526 6.526 0 0 0-.72-.64 1.5 1.5 0 0 0-.068-.048l.001.058c.008.407.119 1.046.309 1.906.145.656.329 1.414.535 2.259l.187.771c1.114 4.6 2.629 11.31 1.607 16.93-.375 2.062-.716 3.384-.96 4.33-.083.323-.155.601-.213.851-.114.49-.174.86-.177 1.243-.004.384.05.805.188 1.391.21.9.602 2.129 1.24 4.128.21.659.447 1.402.713 2.243 1.067 3.38 2.588 8.325 4.693 15.808 1.123 3.993 2.242 7.534 3.442 10.461 1.203 2.933 2.472 5.21 3.878 6.706 1.393 1.482 2.892 2.171 4.599 2.017 1.741-.158 3.798-1.2 6.265-3.421Z"
				/>
				<Path
					stroke="#000"
					d="M0-.5h10.369"
					transform="matrix(.24637 .96918 -.94266 .33375 176.383 250.401)"
				/>
				<Path
					stroke="#000"
					d="M0-.5h13.312"
					transform="matrix(.1919 .98141 -.96486 .26277 181.383 247.401)"
				/>
				<Path
					// fill="#E9CECE"
					stroke="#000"
					d="m118.629 285.363-.004.051.007.051c1.921 14.843-.729 25.946-4.373 32.568-1.827 3.32-3.881 5.474-5.694 6.44-.904.482-1.719.654-2.407.565-.676-.087-1.277-.431-1.765-1.082l-.316-.421-.404.337c-.319.266-.623.403-.912.449a1.647 1.647 0 0 1-.916-.134c-.669-.288-1.41-.989-2.168-2.144-1.508-2.299-2.932-6.163-3.953-11.13-2.04-9.916-2.442-24.054 1.144-38.391l.01-.041.003-.042c.576-7.57 1.125-12.869 1.707-16.446.291-1.789.588-3.132.895-4.107.313-.991.617-1.536.883-1.796.124-.121.223-.164.298-.178a.534.534 0 0 1 .313.05c.299.125.68.447 1.156 1.001.629.729 1.319 1.729 2.11 2.876.404.584.834 1.208 1.296 1.853 1.075 1.502 2.665 2.218 4.25 2.915l.127.056c1.571.691 3.179 1.397 4.611 2.8 2.921 2.859 5.253 8.778 4.102 23.9Z"
				/>
				<Path
					stroke="#000"
					d="M101.883 316.401v8m6.603-11.532-.206 12.081"
				/>
				<Path
					// fill="#E9CECE"
					stroke="#000"
					d="m131.071 283.655.004.051-.007.051c-1.921 14.843.729 25.946 4.373 32.568 1.827 3.321 3.881 5.475 5.694 6.441.904.481 1.719.653 2.407.564.676-.087 1.277-.431 1.765-1.082l.316-.421.404.337c.319.266.623.403.912.449.287.046.59.006.916-.134.669-.287 1.41-.989 2.168-2.144 1.508-2.298 2.932-6.163 3.953-11.13 2.04-9.916 2.442-24.054-1.144-38.391l-.01-.041-.003-.042c-.576-7.57-1.125-12.869-1.707-16.446-.291-1.789-.588-3.132-.895-4.107-.313-.991-.617-1.536-.883-1.796-.124-.121-.223-.164-.298-.178a.542.542 0 0 0-.313.05c-.299.125-.68.448-1.156 1.001-.629.73-1.319 1.729-2.11 2.876-.404.585-.834 1.208-1.296 1.853-1.076 1.503-2.666 2.218-4.25 2.915l-.127.056c-1.571.691-3.179 1.398-4.611 2.8-2.921 2.859-5.253 8.778-4.102 23.9Z"
				/>
				<Path
					stroke="#000"
					d="m141.881 310.363 1 13m4.196-10.027.608 7.044"
				/>
				<Path
					// fill="#E9CECE"
					stroke="#000"
					d="M159.883 134.401c0 20.171-15.907 36.5-35.5 36.5-19.594 0-35.5-16.329-35.5-36.5s15.906-36.5 35.5-36.5c19.593 0 35.5 16.329 35.5 36.5Z"
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

export default Rabiticon;