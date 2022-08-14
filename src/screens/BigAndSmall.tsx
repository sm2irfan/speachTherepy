import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, {
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';

import {
	GestureHandlerRootView,
	PanGestureHandler,
	PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const CIRCLE_RADIUS = 200;
const increesBig = 10;
const increesSmall = -20;
type ContextType = {
	translateXHead: number;
	translateYHead: number;
	translateXEar: number;
	translateYEar: number;
	translateXStomac: number;
	translateYStomac: number;
	translateXHand: number;
	translateYHand: number;
	translateXLeg: number;
	translateYLeg: number;

	//small
	translateXSmallHead: number;
	translateYSmallHead: number;
	translateXSmallEar: number;
	translateYSmallEar: number;
	translateXSmallStomac: number;
	translateYSmallStomac: number;
	translateXSmallHand: number;
	translateYSmallHand: number;
	translateXSmallLeg: number;
	translateYSmallLeg: number;
};

export default function App() {
	const translateXHead = useSharedValue(-158);
	const translateYHead = useSharedValue(466);
	const translateXEar = useSharedValue(153);
	const translateYEar = useSharedValue(258);
	const translateXStomac = useSharedValue(18);
	const translateYStomac = useSharedValue(179);
	const translateXHand = useSharedValue(0);
	const translateYHand = useSharedValue(0);
	const translateXLeg = useSharedValue(-72);
	const translateYLeg = useSharedValue(66);

	//small
	const translateXSmallHead = useSharedValue(95);
	const translateYSmallHead = useSharedValue(12);
	const translateXSmallEar = useSharedValue(-161);
	const translateYSmallEar = useSharedValue(-262);
	const translateXSmallStomac = useSharedValue(160);
	const translateYSmallStomac = useSharedValue(-172);
	const translateXSmallHand = useSharedValue(149);
	const translateYSmallHand = useSharedValue(-435);
	const translateXSmallLeg = useSharedValue(-156);
	const translateYSmallLeg = useSharedValue(-394);

	/*Head
	 * 
	 * 
	 * 
	 * 
	Head */

	const panGestureEventHead = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXHead = translateXHead.value;
			context.translateYHead = translateYHead.value;
		},
		onActive: (event, context) => {
			translateXHead.value = event.translationX + context.translateXHead;
			translateYHead.value = event.translationY + context.translateYHead;
		},
		onEnd: () => {
			console.log('x', translateXHead, 'y', translateYHead);
			const xSitLocation = -63;
			const ySitLocation = -13;

			if (
				translateYHead.value > ySitLocation - 40 &&
				translateYHead.value < ySitLocation + 40 &&
				translateXHead.value > xSitLocation - 40 &&
				translateXHead.value < xSitLocation + 40
			) {
				translateXHead.value = withSpring(-63);
				translateYHead.value = withSpring(-13);
			} else {
				translateXHead.value = withSpring(-158);
				translateYHead.value = withSpring(466);
			}
		},
	});

	const rStyleHead = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXHead.value,
				},
				{
					translateY: translateYHead.value,
				},
			],
		};
	});

	/*Ear
	 * 
	 * 
	 * 
	 * 
	Ear */

	const panGestureEventEar = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXEar = translateXEar.value;
			context.translateYEar = translateYEar.value;
		},
		onActive: (event, context) => {
			translateXEar.value = event.translationX + context.translateXEar;
			translateYEar.value = event.translationY + context.translateYEar;
		},
		onEnd: () => {
			console.log('xtri', translateXEar, 'y', translateYEar);
			const xSitLocation = -62;
			const ySitLocation = -196;

			if (
				translateYEar.value > ySitLocation - 40 &&
				translateYEar.value < ySitLocation + 40 &&
				translateXEar.value > xSitLocation - 40 &&
				translateXEar.value < xSitLocation + 40
			) {
				translateXEar.value = withSpring(-62);
				translateYEar.value = withSpring(-196);
			} else {
				translateXEar.value = withSpring(153);
				translateYEar.value = withSpring(258);
			}
		},
	});

	const rStyleEar = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXEar.value,
				},
				{
					translateY: translateYEar.value,
				},
			],
		};
	});

	/*Stomac
	 * 
	 * 
	 * 
	 * 
	Stomac */

	const panGestureEventStomac = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXStomac = translateXStomac.value;
			context.translateYStomac = translateYStomac.value;
		},
		onActive: (event, context) => {
			translateXStomac.value =
				event.translationX + context.translateXStomac;
			translateYStomac.value =
				event.translationY + context.translateYStomac;
		},
		onEnd: () => {
			console.log('x', translateXStomac, 'y', translateYStomac);
			const xSitLocation = -160;
			const ySitLocation = -100;

			if (
				translateYStomac.value > ySitLocation - 40 &&
				translateYStomac.value < ySitLocation + 40 &&
				translateXStomac.value > xSitLocation - 40 &&
				translateXStomac.value < xSitLocation + 40
			) {
				translateXStomac.value = withSpring(-166);
				translateYStomac.value = withSpring(-102);
			} else {
				translateXStomac.value = withSpring(0);
				translateYStomac.value = withSpring(0);
			}
		},
	});

	const rStyleStomac = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXStomac.value,
				},
				{
					translateY: translateYStomac.value,
				},
			],
		};
	});

	/*Hand
	 * 
	 * 
	 * 
	 * 
	Hand */

	const panGestureEventHand = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXHand = translateXHand.value;
			context.translateYHand = translateYHand.value;
		},
		onActive: (event, context) => {
			translateXHand.value = event.translationX + context.translateXHand;
			translateYHand.value = event.translationY + context.translateYHand;
		},
		onEnd: () => {
			console.log('x', translateXHand, 'y', translateYHand);
			const xSitLocation = -65;
			const ySitLocation = -221;

			if (
				translateYHand.value > ySitLocation - 40 &&
				translateYHand.value < ySitLocation + 40 &&
				translateXHand.value > xSitLocation - 40 &&
				translateXHand.value < xSitLocation + 40
			) {
				translateXHand.value = withSpring(-65);
				translateYHand.value = withSpring(-221);
			} else {
				translateXHand.value = withSpring(0);
				translateYHand.value = withSpring(0);
			}
		},
	});

	const rStyleHand = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXHand.value,
				},
				{
					translateY: translateYHand.value,
				},
			],
		};
	});

	/*Leg
	 * 
	 * 
	 * 
	 * 
	Leg */

	const panGestureEventLeg = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXLeg = translateXLeg.value;
			context.translateYLeg = translateYLeg.value;
		},
		onActive: (event, context) => {
			translateXLeg.value = event.translationX + context.translateXLeg;
			translateYLeg.value = event.translationY + context.translateYLeg;
		},
		onEnd: () => {
			console.log('x', translateXLeg, 'y', translateYLeg);
			const xSitLocation = -64;
			const ySitLocation = -242;

			if (
				translateYLeg.value > ySitLocation - 40 &&
				translateYLeg.value < ySitLocation + 40 &&
				translateXLeg.value > xSitLocation - 40 &&
				translateXLeg.value < xSitLocation + 40
			) {
				translateXLeg.value = withSpring(-64);
				translateYLeg.value = withSpring(-242);
			} else {
				translateXLeg.value = withSpring(-72);
				translateYLeg.value = withSpring(66);
			}
		},
	});

	const rStyleLeg = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXLeg.value,
				},
				{
					translateY: translateYLeg.value,
				},
			],
		};
	});

	/*SmallHead
	 * 
	 * 
	 * 
	 * 
	SmallHead */

	const panGestureEventSmallHead = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXSmallHead = translateXSmallHead.value;
			context.translateYSmallHead = translateYSmallHead.value;
		},
		onActive: (event, context) => {
			translateXSmallHead.value =
				event.translationX + context.translateXSmallHead;
			translateYSmallHead.value =
				event.translationY + context.translateYSmallHead;
		},
		onEnd: () => {
			console.log('x', translateXSmallHead, 'y', translateYSmallHead);
			const xSitLocation = -170;
			const ySitLocation = -175;

			if (
				translateYSmallHead.value > ySitLocation - 40 &&
				translateYSmallHead.value < ySitLocation + 40 &&
				translateXSmallHead.value > xSitLocation - 40 &&
				translateXSmallHead.value < xSitLocation + 40
			) {
				translateXSmallHead.value = withSpring(0);
				translateYSmallHead.value = withSpring(-165);
			} else {
				translateXSmallHead.value = withSpring(0);
				translateYSmallHead.value = withSpring(0);
			}
		},
	});

	const rStyleSmallHead = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXSmallHead.value,
				},
				{
					translateY: translateYSmallHead.value,
				},
			],
		};
	});

	/*SmallEar
	 * 
	 * 
	 * 
	 * 
	SmallEar */

	const panGestureEventSmallEar = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXSmallEar = translateXSmallEar.value;
			context.translateYSmallEar = translateYSmallEar.value;
		},
		onActive: (event, context) => {
			translateXSmallEar.value =
				event.translationX + context.translateXSmallEar;
			translateYSmallEar.value =
				event.translationY + context.translateYSmallEar;
		},
		onEnd: () => {
			console.log('xtri', translateXSmallEar, 'y', translateYSmallEar);
			const xSitLocation = 153;
			const ySitLocation = 258;

			if (
				translateYSmallEar.value > ySitLocation - 40 &&
				translateYSmallEar.value < ySitLocation + 40 &&
				translateXSmallEar.value > xSitLocation - 40 &&
				translateXSmallEar.value < xSitLocation + 40
			) {
				translateXSmallEar.value = withSpring(50);
				translateYSmallEar.value = withSpring(-330);
			} else {
				translateXSmallEar.value = withSpring(-167);
				translateYSmallEar.value = withSpring(-262);
			}
		},
	});

	const rStyleSmallEar = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXSmallEar.value,
				},
				{
					translateY: translateYSmallEar.value,
				},
			],
		};
	});

	/*SmallStomac
	 * 
	 * 
	 * 
	 * 
	SmallStomac */

	const panGestureEventSmallStomac = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXSmallStomac = translateXSmallStomac.value;
			context.translateYSmallStomac = translateYSmallStomac.value;
		},
		onActive: (event, context) => {
			translateXSmallStomac.value =
				event.translationX + context.translateXSmallStomac;
			translateYSmallStomac.value =
				event.translationY + context.translateYSmallStomac;
		},
		onEnd: () => {
			console.log('x', translateXSmallStomac, 'y', translateYSmallStomac);
			const xSitLocation = -160;
			const ySitLocation = -100;

			if (
				translateYSmallStomac.value > ySitLocation - 40 &&
				translateYSmallStomac.value < ySitLocation + 40 &&
				translateXSmallStomac.value > xSitLocation - 40 &&
				translateXSmallStomac.value < xSitLocation + 40
			) {
				translateXSmallStomac.value = withSpring(-166);
				translateYSmallStomac.value = withSpring(-102);
			} else {
				translateXSmallStomac.value = withSpring(160);
				translateYSmallStomac.value = withSpring(-172);
			}
		},
	});

	const rStyleSmallStomac = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXSmallStomac.value,
				},
				{
					translateY: translateYSmallStomac.value,
				},
			],
		};
	});

	/*SmallHand
	 * 
	 * 
	 * 
	 * 
	SmallHand */

	const panGestureEventSmallHand = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXSmallHand = translateXSmallHand.value;
			context.translateYSmallHand = translateYSmallHand.value;
		},
		onActive: (event, context) => {
			translateXSmallHand.value =
				event.translationX + context.translateXSmallHand;
			translateYSmallHand.value =
				event.translationY + context.translateYSmallHand;
		},
		onEnd: () => {
			console.log('x', translateXSmallHand, 'y', translateYSmallHand);
			const xSitLocation = -160;
			const ySitLocation = -100;

			if (
				translateYSmallHand.value > ySitLocation - 40 &&
				translateYSmallHand.value < ySitLocation + 40 &&
				translateXSmallHand.value > xSitLocation - 40 &&
				translateXSmallHand.value < xSitLocation + 40
			) {
				translateXSmallHand.value = withSpring(-166);
				translateYSmallHand.value = withSpring(-102);
			} else {
				translateXSmallHand.value = withSpring(149);
				translateYSmallHand.value = withSpring(-435);
			}
		},
	});

	const rStyleSmallHand = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXSmallHand.value,
				},
				{
					translateY: translateYSmallHand.value,
				},
			],
		};
	});

	/*SmallLeg
	 * 
	 * 
	 * 
	 * 
	SmallLeg */

	const panGestureEventSmallLeg = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXSmallLeg = translateXSmallLeg.value;
			context.translateYSmallLeg = translateYSmallLeg.value;
		},
		onActive: (event, context) => {
			translateXSmallLeg.value =
				event.translationX + context.translateXSmallLeg;
			translateYSmallLeg.value =
				event.translationY + context.translateYSmallLeg;
		},
		onEnd: () => {
			console.log('x', translateXSmallLeg, 'y', translateYSmallLeg);
			const xSitLocation = -160;
			const ySitLocation = -100;

			if (
				translateYSmallLeg.value > ySitLocation - 40 &&
				translateYSmallLeg.value < ySitLocation + 40 &&
				translateXSmallLeg.value > xSitLocation - 40 &&
				translateXSmallLeg.value < xSitLocation + 40
			) {
				translateXSmallLeg.value = withSpring(-166);
				translateYSmallLeg.value = withSpring(-102);
			} else {
				translateXSmallLeg.value = withSpring(156);
				translateYSmallLeg.value = withSpring(-394);
			}
		},
	});

	const rStyleSmallLeg = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXSmallLeg.value,
				},
				{
					translateY: translateYSmallLeg.value,
				},
			],
		};
	});
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<View style={{ height: 400 }}>
				<View
					style={{
						transform: [{ translateX: 0 }, { translateY: 0 }],
					}}>
					<Rabbit
						height={380}
						width={280}
						color="rgba(0, 128, 0, 1)"
					/>
				</View>
				<View
					style={{
						transform: [{ translateX: 200 }, { translateY: -250 }],
					}}>
					<Rabbit
						height={250}
						width={200}
						color="rgba(0, 128, 0, 1)"
					/>
				</View>
			</View>
			<View style={[styles.container]}>
				<PanGestureHandler onGestureEvent={panGestureEventHead}>
					<Animated.View style={[rStyleHead]}>
						<RabbitHead
							height={increesBig}
							width={increesBig}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventEar}>
					<Animated.View style={[rStyleEar, { margin: 20 }]}>
						<RabbitEar
							height={increesBig}
							width={increesBig}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventStomac}>
					<Animated.View style={rStyleStomac}>
						<RabbitStomac
							height={increesBig}
							width={increesBig}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventHand}>
					<Animated.View style={rStyleHand}>
						<RabbitHand
							height={increesBig}
							width={increesBig}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventLeg}>
					<Animated.View style={rStyleLeg}>
						<RabbitLeg
							height={increesBig}
							width={increesBig}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>

				<PanGestureHandler onGestureEvent={panGestureEventSmallHead}>
					<Animated.View style={[rStyleSmallHead]}>
						<RabbitHead
							height={increesSmall}
							width={increesSmall}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventSmallEar}>
					<Animated.View style={[rStyleSmallEar, { margin: 20 }]}>
						<RabbitEar
							height={increesSmall}
							width={increesSmall}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventSmallStomac}>
					<Animated.View style={rStyleSmallStomac}>
						<RabbitStomac
							height={increesSmall}
							width={increesSmall}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventSmallHand}>
					<Animated.View style={rStyleSmallHand}>
						<RabbitHand
							height={increesSmall}
							width={increesSmall}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventSmallLeg}>
					<Animated.View style={rStyleSmallLeg}>
						<RabbitLeg
							height={increesSmall}
							width={increesSmall}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
			</View>
		</GestureHandlerRootView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headShape: {
		flexDirection: 'row',
		transform: [{ translateX: 0 }, { translateY: 50 }],
		height: 120,
		backgroundColor: 'rgba(128,128,0,0.3)',
		// padding: 5,
		marginLeft: 2,
	},
});

const Rabbit = ({ color = '#000000', width = 10, height = 18 }) => {
	return (
		<View>
			{/* <Svg width={width} height={height} viewBox="0 0 127 171">
				<Path
					// fill={color}
					// fillRule="evenodd"
					stroke="#000"
					d="M63.465 77v92.996c-16.922-.255-32.347-13.433-43.605-34.876C8.504 113.49 1.465 83.573 1.465 50.5c0-16.527 2.495-28.309 6.478-36.19C11.918 6.441 17.36 2.48 23.296 1.505 29.253.53 35.81 2.542 42.024 6.846c6.21 4.301 12.036 10.864 16.504 18.897a37.136 37.136 0 0 0 1.672 2.716l.269.4c.366.544.678 1.006.953 1.486.66 1.152 1.114 2.41 1.422 5.022.62 5.276.621 15.859.621 41.633Zm1 0c0-25.774.001-36.358.622-41.633.307-2.611.76-3.87 1.421-5.022.276-.48.587-.942.953-1.486l.27-.4a37.101 37.101 0 0 0 1.671-2.716C73.87 17.71 79.697 11.147 85.906 6.846 92.12 2.542 98.677.53 104.634 1.506c5.935.974 11.378 4.936 15.354 12.803 3.982 7.882 6.477 19.664 6.477 36.191 0 33.073-7.039 62.99-18.395 84.62-11.257 21.443-26.683 34.621-43.605 34.876V77Z"
				/>
			</Svg> */}
			<Svg
				width={width}
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

const RabbitEar = ({ color = '#000000', width = 10, height = 18 }) => {
	return (
		<View>
			{/* <Svg width={width} height={height} viewBox="0 0 127 171">
				<Path
					fill={color}
					// fillRule="evenodd"
					stroke="#000"
					d="M11.465 87v92.996c16.922-.255 32.347-13.433 43.605-34.876 11.356-21.63 18.395-51.547 18.395-84.62 0-16.527-2.495-28.309-6.477-36.19-3.976-7.868-9.419-11.83-15.354-12.804-5.957-.978-12.514 1.036-18.728 5.34-6.21 4.301-12.036 10.864-16.504 18.897a37.101 37.101 0 0 1-1.672 2.716l-.269.4c-.366.544-.677 1.006-.953 1.486-.66 1.152-1.114 2.41-1.421 5.022-.62 5.276-.622 15.859-.622 41.633Z"
				/>
			</Svg> */}

			<Svg
				width={width + 86}
				height={height + 83}
				fill="none"
				viewBox="0 0 86 83">
				<Path
					fill="#C94040"
					stroke="#000"
					d="m24.962 78.922-.113.034-.085.081c-.84.796-1.668 1.036-2.502.888-.867-.154-1.826-.746-2.86-1.8-2.065-2.108-4.24-5.87-6.393-10.709-4.294-9.652-8.414-23.38-11.41-36.112-1.12-6.967-1.3-11.944-.916-15.49.384-3.55 1.33-5.622 2.42-6.828 1.788-1.976 4.051-1.777 5.6-1.642.34.03.646.057.905.057.342 0 .803-.09 1.283-.185a17.425 17.425 0 0 1 2.04-.316c1.407-.12 3.045.002 4.679.935 3.27 1.869 6.752 7.136 8 21.11.593 6.644 1.547 12.908 2.463 18.613l.385 2.385c.771 4.764 1.47 9.088 1.852 12.883.445 4.427.448 8.065-.342 10.795-.778 2.69-2.316 4.482-5.006 5.3Z"
				/>
				<Path
					fill="#E58D8D"
					stroke="#000"
					d="M25.362 57.225c.798 4.308.97 8.291.615 11.24-.178 1.478-.485 2.667-.892 3.502-.412.846-.877 1.235-1.326 1.318-.45.083-1.023-.113-1.71-.756-.68-.634-1.392-1.634-2.087-2.95-1.387-2.627-2.652-6.407-3.45-10.716-.798-4.309-.97-8.291-.615-11.24.178-1.478.485-2.667.892-3.502.412-.846.877-1.235 1.326-1.318.45-.083 1.023.113 1.71.756.68.634 1.392 1.634 2.087 2.95 1.387 2.627 2.652 6.407 3.45 10.716Z"
				/>
				<Path
					fill="#C94040"
					stroke="#000"
					d="m62.203 81.749-.05-.059-.065-.04c-1.93-1.207-3.577-1.928-4.926-2.518l-.215-.094c-1.407-.617-2.407-1.083-3.138-1.817-.708-.71-1.204-1.72-1.453-3.513-.25-1.805-.245-4.355.018-8.1l.001-.017v-.017c0-13.58 2.865-31.07 7.286-44.532 2.212-6.735 4.8-12.42 7.587-16.1 1.393-1.84 2.812-3.146 4.226-3.847 1.397-.691 2.795-.797 4.213-.23 3.107 1.243 5.308 2.462 6.785 3.986 1.458 1.503 2.244 3.34 2.445 5.902.204 2.583-.189 5.886-1.091 10.29-.901 4.399-2.301 9.854-4.09 16.732-2.732 10.503-6.575 22.4-10.106 31.23-1.768 4.418-3.448 8.044-4.862 10.34-.714 1.158-1.33 1.926-1.821 2.301-.245.187-.408.237-.5.24-.062.002-.138-.013-.244-.137Z"
				/>
				<Path
					fill="#E58D8D"
					stroke="#000"
					d="M67.32 59.133c-1.25 4.035-2.92 7.5-4.591 9.84-.838 1.172-1.66 2.038-2.409 2.558-.756.524-1.362.647-1.826.503-.463-.144-.894-.588-1.22-1.448-.325-.852-.512-2.032-.54-3.472-.053-2.876.531-6.676 1.782-10.71 1.251-4.036 2.92-7.5 4.592-9.84.837-1.173 1.659-2.04 2.409-2.559.756-.524 1.362-.646 1.825-.503.463.144.894.588 1.221 1.448.324.853.511 2.032.539 3.472.054 2.876-.53 6.677-1.782 10.711Z"
				/>
			</Svg>
		</View>
	);
};

const RabbitHand = ({ color = '#000000', width = 10, height = 18 }) => {
	return (
		<View>
			{/* <Svg width={width} height={height} viewBox="0 0 127 171">
				<Path
					fill={color}
					// fillRule="evenodd"
					stroke="#000"
					d="M11.465 87v92.996c16.922-.255 32.347-13.433 43.605-34.876 11.356-21.63 18.395-51.547 18.395-84.62 0-16.527-2.495-28.309-6.477-36.19-3.976-7.868-9.419-11.83-15.354-12.804-5.957-.978-12.514 1.036-18.728 5.34-6.21 4.301-12.036 10.864-16.504 18.897a37.101 37.101 0 0 1-1.672 2.716l-.269.4c-.366.544-.677 1.006-.953 1.486-.66 1.152-1.114 2.41-1.421 5.022-.62 5.276-.622 15.859-.622 41.633Z"
				/>
			</Svg> */}

			<Svg
				width={width + 135}
				height={height + 74}
				fill="none"
				viewBox="0 0 135 74">
				<Path
					fill="#C94040"
					stroke="#000"
					d="m8.217 68.291-.202-.182-.263.07c-1.993.538-3.499.382-4.594-.262-1.095-.643-1.878-1.831-2.3-3.568C.004 60.85.673 55.357 2.89 48.636 7.312 35.23 17.788 17.25 33.736 1.298c.3-.3.536-.507.72-.64a2.3 2.3 0 0 1 .067-.048v.057c-.009.407-.12 1.046-.309 1.906-.145.657-.33 1.414-.535 2.26-.06.25-.124.506-.188.77-1.113 4.6-2.628 11.31-1.606 16.931.375 2.062.716 3.384.96 4.33.083.322.155.601.213.85.114.49.174.86.177 1.244.003.384-.05.804-.188 1.391-.21.9-.603 2.129-1.24 4.128-.21.659-.447 1.401-.713 2.243-1.067 3.38-2.588 8.325-4.693 15.807-1.123 3.994-2.242 7.535-3.442 10.462-1.203 2.933-2.472 5.21-3.878 6.706-1.393 1.482-2.892 2.171-4.599 2.017-1.741-.158-3.798-1.2-6.265-3.421Z"
				/>
				<Path stroke="#000" d="M11.022 56.947 6.558 67.001" />
				<Path
					stroke="#000"
					d="M0-.5h18.108"
					transform="matrix(-.41437 .9101 -.90232 -.43108 17.886 53.945)"
				/>
				<Path
					fill="#C94040"
					stroke="#000"
					d="m126.721 69.791.202-.182.262.07c1.993.538 3.499.382 4.595-.262 1.095-.643 1.877-1.831 2.3-3.568.852-3.499.184-8.992-2.033-15.713-4.422-13.406-14.898-31.387-30.845-47.338-.3-.3-.537-.507-.72-.64a1.708 1.708 0 0 0-.068-.048l.001.057c.008.407.119 1.046.308 1.906.145.657.33 1.414.536 2.26l.187.77c1.114 4.6 2.629 11.31 1.607 16.931a55.657 55.657 0 0 1-.96 4.33c-.083.322-.155.601-.213.85-.115.49-.175.86-.178 1.244-.003.384.051.804.188 1.391.211.9.603 2.129 1.241 4.128.21.659.447 1.401.712 2.243 1.067 3.38 2.589 8.325 4.693 15.807 1.124 3.994 2.243 7.535 3.443 10.462 1.202 2.933 2.472 5.21 3.878 6.706 1.393 1.482 2.891 2.171 4.598 2.017 1.742-.158 3.799-1.2 6.266-3.421Z"
				/>
				<Path
					stroke="#000"
					d="M0-.5h10.369"
					transform="matrix(.24637 .96918 -.94266 .33375 119.382 59.945)"
				/>
				<Path
					stroke="#000"
					d="M0-.5h13.312"
					transform="matrix(.1919 .98141 -.96486 .26277 124.382 56.945)"
				/>
			</Svg>
		</View>
	);
};

const RabbitHead = ({ color = '#000000', width = 10, height = 18 }) => {
	return (
		<View>
			{/* <Svg width={width} height={height} viewBox="0 0 127 171">
				<Path
					fill={color}
					// fillRule="evenodd"
					stroke="#000"
					d="M11.465 87v92.996c16.922-.255 32.347-13.433 43.605-34.876 11.356-21.63 18.395-51.547 18.395-84.62 0-16.527-2.495-28.309-6.477-36.19-3.976-7.868-9.419-11.83-15.354-12.804-5.957-.978-12.514 1.036-18.728 5.34-6.21 4.301-12.036 10.864-16.504 18.897a37.101 37.101 0 0 1-1.672 2.716l-.269.4c-.366.544-.677 1.006-.953 1.486-.66 1.152-1.114 2.41-1.421 5.022-.62 5.276-.622 15.859-.622 41.633Z"
				/>
			</Svg> */}

			<Svg
				width={width + 72}
				height={height + 74}
				fill="none"
				viewBox="0 0 72 74">
				<Path
					fill="#C94040"
					stroke="#000"
					d="M71.5 37c0 20.171-15.907 36.5-35.5 36.5S.5 57.171.5 37 16.407.5 36 .5 71.5 16.829 71.5 37Z"
				/>
				<Path
					fill="#FDF5F5"
					stroke="#000"
					d="M27.5 25.5c0 1.694-.529 3.21-1.36 4.291-.832 1.081-1.947 1.709-3.14 1.709-1.194 0-2.308-.628-3.14-1.709-.831-1.081-1.36-2.597-1.36-4.291 0-1.694.529-3.21 1.36-4.291.832-1.081 1.947-1.709 3.14-1.709 1.194 0 2.308.628 3.14 1.709.831 1.081 1.36 2.597 1.36 4.291Z"
				/>
				<Path
					fill="#0D0C0C"
					stroke="#000"
					d="M24.5 28.5c0 1.215-.77 2-1.5 2s-1.5-.785-1.5-2c0-1.215.77-2 1.5-2s1.5.785 1.5 2Z"
				/>
				<Path
					fill="#FDF5F5"
					stroke="#000"
					d="M53.5 25.5c0 1.694-.529 3.21-1.36 4.291-.832 1.081-1.947 1.709-3.14 1.709-1.194 0-2.308-.628-3.14-1.709-.831-1.081-1.36-2.597-1.36-4.291 0-1.694.529-3.21 1.36-4.291.832-1.081 1.947-1.709 3.14-1.709 1.194 0 2.308.628 3.14 1.709.831 1.081 1.36 2.597 1.36 4.291Z"
				/>
				<Path
					fill="#121111"
					stroke="#000"
					d="M50.5 28.5c0 1.215-.77 2-1.5 2s-1.5-.785-1.5-2c0-1.215.77-2 1.5-2s1.5.785 1.5 2Z"
				/>
				<Path
					fill="#7E4D4D"
					stroke="#000"
					d="M40 38.54a3.5 3.5 0 1 1-7 0c0-.487.1-.777.225-.958.122-.175.307-.303.594-.392.297-.092.674-.133 1.14-.148.313-.01.642-.007.995-.004a67.466 67.466 0 0 0 1.092 0c.353-.003.682-.005.995.004.466.015.843.056 1.14.148.287.089.472.217.594.392.126.18.225.47.225.959Z"
				/>
				<Path
					fill="#C4C4C4"
					stroke="#000"
					d="m36.512 47.748-.012.053v.055c0 .636-.342 1.25-.972 1.722-.629.472-1.521.778-2.528.778-.917 0-2.05-.61-2.985-1.492a6.449 6.449 0 0 1-1.114-1.36 3.532 3.532 0 0 1-.292-.608c.149.14.32.309.514.5l.198.196c.487.478 1.067 1.033 1.674 1.469.595.427 1.291.795 2.005.795.753 0 1.466-.495 2.029-.992.492-.435.96-.958 1.342-1.384l.203-.225.05-.056c-.028.158-.066.34-.112.549Zm9 0-.012.053v.055c0 .636-.342 1.25-.972 1.722-.629.472-1.521.778-2.528.778-.917 0-2.05-.61-2.986-1.492a6.449 6.449 0 0 1-1.113-1.36 3.532 3.532 0 0 1-.292-.608c.149.14.32.309.514.5l.198.196c.487.478 1.067 1.033 1.674 1.469.595.427 1.291.795 2.005.795.753 0 1.466-.495 2.029-.992.492-.435.96-.958 1.342-1.384l.203-.225.05-.056c-.028.158-.066.34-.112.549Z"
				/>
				<Path stroke="#000" d="m36.991 41.949.018 5.099" />
				<Path
					fill="#C4C4C4"
					stroke="#000"
					d="m34.605 53.71.372-4.89 1.589-.799v5.69h-1.96Zm4.855-.21-.371-4.89-1.589-.8v5.69h1.96Z"
				/>
				<Path
					stroke="#000"
					d="m42.56 35.448 16.796-5.646m-14.773 8.592 17.926-2.579m-17.853 6.286 19.047 1.49m-36.511-6.669L9.783 32.241m16.718 7.354-14.9-2.001m15.072 4.502-18 2"
				/>
			</Svg>
		</View>
	);
};

const RabbitStomac = ({ color = '#000000', width = 10, height = 18 }) => {
	return (
		<View>
			{/* <Svg width={width} height={height} viewBox="0 0 127 171">
				<Path
					fill={color}
					// fillRule="evenodd"
					stroke="#000"
					d="M11.465 87v92.996c16.922-.255 32.347-13.433 43.605-34.876 11.356-21.63 18.395-51.547 18.395-84.62 0-16.527-2.495-28.309-6.477-36.19-3.976-7.868-9.419-11.83-15.354-12.804-5.957-.978-12.514 1.036-18.728 5.34-6.21 4.301-12.036 10.864-16.504 18.897a37.101 37.101 0 0 1-1.672 2.716l-.269.4c-.366.544-.677 1.006-.953 1.486-.66 1.152-1.114 2.41-1.421 5.022-.62 5.276-.622 15.859-.622 41.633Z"
				/>
			</Svg> */}

			<Svg width={width + 72} height="93" fill="none" viewBox="0 0 72 93">
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

const RabbitLeg = ({ color = '#000000', width = 10, height = 18 }) => {
	return (
		<View>
			<Svg
				width={width + 68}
				height={height + 76}
				fill="none"
				viewBox="0 0 68 76">
				<Path
					fill="#C94040"
					stroke="#000"
					d="m27.484 36.322-.004.054.007.053c1.92 14.194-.728 24.808-4.368 31.136-1.825 3.173-3.876 5.232-5.69 6.156-.903.46-1.722.627-2.416.541-.682-.084-1.285-.416-1.77-1.036l-.31-.395-.396.315c-.612.488-1.214.558-1.842.3-.671-.276-1.412-.947-2.168-2.05-1.506-2.196-2.928-5.89-3.949-10.639-2.038-9.482-2.44-23.003 1.143-36.714l.012-.042.003-.045c.576-7.242 1.125-12.31 1.707-15.731.29-1.711.587-2.994.893-3.924.312-.946.614-1.461.876-1.707a.597.597 0 0 1 .3-.17.585.585 0 0 1 .324.049c.302.12.683.43 1.158.958.629.698 1.317 1.653 2.109 2.75.403.56.834 1.156 1.296 1.774 1.077 1.44 2.667 2.124 4.25 2.79l.126.053c1.572.661 3.181 1.338 4.614 2.68 2.915 2.73 5.245 8.382 4.095 22.844Z"
				/>
				<Path stroke="#000" d="M10.737 66.02v7.654" />
				<Path
					stroke="#000"
					d="M0-.5h11.561"
					transform="rotate(91.02 -22.343 39.587) skewX(.086)"
				/>
				<Path
					fill="#C94040"
					stroke="#000"
					d="m39.926 34.688.004.054-.007.053c-1.92 14.194.728 24.808 4.368 31.136 1.824 3.173 3.876 5.232 5.689 6.156.904.46 1.722.627 2.416.541.683-.084 1.285-.416 1.771-1.036l.31-.395.395.315c.612.488 1.214.558 1.842.3.672-.276 1.413-.947 2.169-2.05 1.505-2.196 2.928-5.89 3.948-10.639 2.039-9.483 2.441-23.003-1.143-36.714l-.01-.043-.004-.044c-.576-7.242-1.125-12.31-1.707-15.731-.29-1.711-.587-2.994-.894-3.924-.312-.946-.614-1.462-.875-1.707a.597.597 0 0 0-.3-.17.585.585 0 0 0-.324.049c-.302.12-.683.43-1.159.958-.628.698-1.317 1.653-2.108 2.75-.404.56-.834 1.156-1.297 1.774-1.076 1.44-2.666 2.124-4.249 2.79l-.126.053c-1.572.661-3.181 1.338-4.614 2.68-2.915 2.73-5.245 8.382-4.095 22.844Z"
				/>
				<Path
					stroke="#000"
					d="M0-.5h12.479"
					transform="matrix(.08014 .99678 -.9973 .0734 50.237 60.279)"
				/>
				<Path
					stroke="#000"
					d="M0-.5h6.768"
					transform="matrix(.0899 .99595 -.9966 .08235 55.433 63.128)"
				/>
			</Svg>
		</View>
	);
};
