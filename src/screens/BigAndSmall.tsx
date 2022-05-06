import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

import TriangleSec from '../components/TriangleSec';
import Heart from '../components/Heart';
import RectAngle from '../components/RectAngle';
import Arrowicon from '../components/Arrowicon';
import HeartRight from '../components/HeartRight';
import HeartLeft from '../components/HeartLeft';
import Rabit from '../components/bigSmallComponents/Rabbit';
import RabbitHead from '../components/bigSmallComponents/RabbitHead';
import RabbitEar from '../components/bigSmallComponents/RabbitEar';
import RabbitStomac from '../components/bigSmallComponents/RabbitStomac';

const CIRCLE_RADIUS = 200;

type ContextType = {
	translateXSquare: number;
	translateYSquare: number;
	translateXTriangle: number;
	translateYTriangle: number;
	translateXHeart: number;
	translateYHeart: number;
};

export default function App() {
	const translateXSquare = useSharedValue(100);
	const translateYSquare = useSharedValue(0);
	const translateXTriangle = useSharedValue(70);
	const translateYTriangle = useSharedValue(0);
	const translateXHeart = useSharedValue(50);
	const translateYHeart = useSharedValue(0);

	/*Head
	 * 
	 * 
	 * 
	 * 
	Head */

	const panGestureEventSquare = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXSquare = translateXSquare.value;
			context.translateYSquare = translateYSquare.value;
		},
		onActive: (event, context) => {
			translateXSquare.value =
				event.translationX + context.translateXSquare;
			translateYSquare.value =
				event.translationY + context.translateYSquare;
		},
		onEnd: () => {
			console.log('x', translateXHeart, 'y', translateYHeart);
			const xSitLocation = -170;
			const ySitLocation = -175;

			if (
				translateYSquare.value > ySitLocation - 40 &&
				translateYSquare.value < ySitLocation + 40 &&
				translateXSquare.value > xSitLocation - 40 &&
				translateXSquare.value < xSitLocation + 40
			) {
				translateXSquare.value = withSpring(0);
				translateYSquare.value = withSpring(-165);
			} else {
				translateXSquare.value = withSpring(100);
				translateYSquare.value = withSpring(0);
			}
		},
	});

	const rStyleSquare = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXSquare.value,
				},
				{
					translateY: translateYSquare.value,
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

	const panGestureEventTriangle = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXTriangle = translateXTriangle.value;
			context.translateYTriangle = translateYTriangle.value;
		},
		onActive: (event, context) => {
			translateXTriangle.value =
				event.translationX + context.translateXTriangle;
			translateYTriangle.value =
				event.translationY + context.translateYTriangle;
		},
		onEnd: () => {
			console.log('xtri', translateXTriangle, 'y', translateYTriangle);
			const xSitLocation = 50;
			const ySitLocation = -330;

			if (
				translateYTriangle.value > ySitLocation - 40 &&
				translateYTriangle.value < ySitLocation + 40 &&
				translateXTriangle.value > xSitLocation - 40 &&
				translateXTriangle.value < xSitLocation + 40
			) {
				translateXTriangle.value = withSpring(50);
				translateYTriangle.value = withSpring(-330);
			} else {
				translateXTriangle.value = withSpring(70);
				translateYTriangle.value = withSpring(0);
			}
		},
	});

	const rStyleTriangle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXTriangle.value,
				},
				{
					translateY: translateYTriangle.value,
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

	const panGestureEventHeart = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXHeart = translateXHeart.value;
			context.translateYHeart = translateYHeart.value;
		},
		onActive: (event, context) => {
			translateXHeart.value =
				event.translationX + context.translateXHeart;
			translateYHeart.value =
				event.translationY + context.translateYHeart;
		},
		onEnd: () => {
			console.log('x', translateXHeart, 'y', translateYHeart);
			const xSitLocation = -160;
			const ySitLocation = -100;

			if (
				translateYHeart.value > ySitLocation - 40 &&
				translateYHeart.value < ySitLocation + 40 &&
				translateXHeart.value > xSitLocation - 40 &&
				translateXHeart.value < xSitLocation + 40
			) {
				translateXHeart.value = withSpring(-166);
				translateYHeart.value = withSpring(-102);
			} else {
				translateXHeart.value = withSpring(50);
				translateYHeart.value = withSpring(0);
			}
		},
	});

	const rStyleHeart = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXHeart.value,
				},
				{
					translateY: translateYHeart.value,
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
					<Rabit
						height={380}
						widht={280}
						color="rgba(0, 128, 0, 1)"
					/>
				</View>
				<View
					style={{
						transform: [{ translateX: 200 }, { translateY: -250 }],
					}}>
					<Rabit
						height={250}
						widht={200}
						color="rgba(0, 128, 0, 1)"
					/>
				</View>
			</View>
			<View style={[styles.container, { flexDirection: 'row' }]}>
				<PanGestureHandler onGestureEvent={panGestureEventSquare}>
					<Animated.View style={[rStyleSquare]}>
						<RabbitHead
							height={250}
							widht={150}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventTriangle}>
					<Animated.View style={[rStyleTriangle, { margin: 20 }]}>
						<RabbitEar
							height={250}
							widht={150}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventHeart}>
					<Animated.View style={rStyleHeart}>
						<RabbitStomac
							height={250}
							widht={250}
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
