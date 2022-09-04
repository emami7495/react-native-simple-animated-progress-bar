import React, { memo, useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

const AnimatedProgressBar = ({
	size,
	isRtl,
	bgColor,
	barColor,
	duration,
	progress,
	barStyle,
	rootStyle,
	barWidth,
}) => {
	const animatedValue = useRef(new Animated.Value(0)).current;
	const styles = StyleSheet.create({
		root: {
			...{
				backgroundColor: bgColor,
			},
			...rootStyle,
		},
		bar: {
			...{
				left: 0,
				height: size,
				alignSelf: 'flex-start',
				backgroundColor: barColor,
				borderTopEndRadius: size,
				borderBottomEndRadius: size,
				width: animatedValue.interpolate(
					{
						inputRange: [0, 1],
						outputRange: [0, barWidth + size],
					},
				),
			},
			...barStyle,
		},
		rtlBar: {
			...{
				right: 0,
				height: size,
				alignSelf: 'flex-end',
				backgroundColor: barColor,
				borderTopStartRadius: size,
				borderBottomStartRadius: size,
				width: animatedValue.interpolate(
					{
						inputRange: [0, 1],
						outputRange: [0, barWidth + size],
					},
				),
			},
			...barStyle,
		},
	});
	useEffect(() => {
		Animated.timing(
			animatedValue,
			{
				duration,
				toValue: progress,
				useNativeDriver: false,
			},
		).start();
	}, [progress]);
	//
	return (
		<View style={styles.root}>
			<Animated.View style={isRtl ? styles.rtlBar : styles.bar} />
		</View>
	);
};
AnimatedProgressBar.propTypes = {
	isRtl: PropTypes.bool,
	size: PropTypes.number,
	bgColor: PropTypes.string,
	barColor: PropTypes.string,
	duration: PropTypes.number,
	barWidth: PropTypes.number,
	progress: PropTypes.number.isRequired,
	barStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	rootStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
AnimatedProgressBar.defaultProps = {
	size: 4,
	isRtl: true,
	barStyle: {},
	rootStyle: {},
	duration: 500,
	barWidth: width,
	bgColor: '#c8e6c9',
	barColor: '#43a047',
};
export default memo(AnimatedProgressBar);
