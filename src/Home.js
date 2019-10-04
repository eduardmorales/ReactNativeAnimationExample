import React, { Component } from 'react';
import { Animated, StyleSheet, View, TouchableOpacity, Text, StatusBar } from 'react-native';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonState: false
		};
		this.animatedValue = new Animated.Value(0);
	}

	Animation = () => {
		if (!this.state.buttonState) {
			Animated.spring(this.animatedValue, {
				toValue: 1
			}).start();
			this.setState({
				buttonState: true
			});
		}
		if (this.state.buttonState) {
			Animated.spring(this.animatedValue, {
				toValue: 0
			}).start();
			this.setState({
				buttonState: false
			});
		}
	};

	render() {
		const animatedStyle = this.animatedValue.interpolate({ inputRange: [ 0, 1 ], outputRange: [ '100%', '50%' ] });
		return (
			<View style={styles.container}>
				<View style={styles.containerButtonAnimation}>
					<Animated.View style={[ styles.buttonsAnimation, { width: animatedStyle } ]}>
						<Text style={styles.text}>Animacion</Text>
					</Animated.View>
				</View>
				<TouchableOpacity style={styles.button} onPress={() => this.Animation()}>
					<Text style={styles.text}>Ver Animación</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center'
	},
	containerButtonAnimation: {
		height: 50,
		width: 250,
		padding: 10
	},
	buttonsAnimation: {
		height: 50,
		backgroundColor: '#008000',
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		marginTop: 25,
		backgroundColor: '#FF8C00',
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 20,
		color: '#FFFFFF',
		padding: 15,
		paddingLeft: 15,
		paddingRight: 15
	}
});
