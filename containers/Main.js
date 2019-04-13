import React, {Component, Fragment} from 'react';
import {StyleSheet, View, FlatList, Text, Modal, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../store/actions';
import Item from '../components/Item';


class Main extends Component {
	state = {
		isModalOpened: false,
		chosenContact: ''
	};

	openModalHandler = chosenContact => {
		this.setState({isModalOpened: true, chosenContact});
	};

	closeModalHandler = () => {
		this.setState({isModalOpened: false});
	};

	componentDidMount() {
		this.props.fetchData();
	}

	render() {
		return (
			<Fragment>
				<Modal
					animationType="slide"
					visible={this.state.isModalOpened}
				>
					<View style={styles.modal_card}>
						<View>
							<Text style={styles.card_text}>{this.state.chosenContact.name}</Text>
							<Image style={styles.image}
							       source={{uri: this.state.chosenContact.image}}
							/>
							<Text style={styles.card_text}>Phone: {this.state.chosenContact.phone}</Text>
							<Text style={styles.card_text}>Email: {this.state.chosenContact.email}</Text>

						</View>
						<View>
							<TouchableOpacity
								onPress={this.closeModalHandler}
							>
								<Text style={styles.button}>Back To List</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>

				<View style={styles.container}>
					<FlatList
						data={this.props.contacts}
						renderItem={(info) => (
							<TouchableOpacity onPress={() => this.openModalHandler(info.item)}>
								<Item
									name={info.item.name}
									image={info.item.image}
								/>
							</TouchableOpacity>
						)}
						keyExtractor={(item => item.id.toString())}
					/>
				</View>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		contacts: state.contacts
	};
};
const mapDispatchToProps = dispatch => {
	return {
		fetchData: () => dispatch(fetchData()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
	container: {
		paddingTop: 60,
		flex: 1,
		backgroundColor: '#fff',
	},
	modal_card: {
		flex: 1,
		marginTop: 30,
		justifyContent: 'space-between',
		alignItems: 'center',

	},
	button: {
		fontSize: 20,
		backgroundColor: 'green',
		paddingVertical: 10,
		paddingHorizontal: 30,
		color: 'white'
	},
	card_text: {
		fontSize: 20
	},
	image: {
		width: 100,
		height: 100,
		margin: 10
	},
});
