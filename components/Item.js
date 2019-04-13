import React from 'react';
import {Text, View, StyleSheet, Image} from "react-native";


const Item = props => {
	return (
		<View style={styles.card}>
			<Image style={styles.image}
			       source={{uri: props.image}}
			/>
			<View style={styles.text}>
				<Text>
					{props.name}
				</Text>
			</View>
		</View>
	)
};

export default Item;

const styles = StyleSheet.create({
	image: {
		width: 60,
		height: 60,
		margin: 5
	},
	card: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#eee',
		margin: 5
	},
	text: {
		flex: 1,
		justifyContent: 'center'
	}
});
