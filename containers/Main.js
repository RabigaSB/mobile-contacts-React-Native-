import React, {Component, Fragment} from 'react';
import {StyleSheet, View, FlatList, Text, Modal, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../store/actions';
import Item from '../components/Item';


class Main extends Component {
	state = {
		isModalOpened: false,
		chosenContact: ''
	};

	openModalHandler = () => {
		this.setState({isModalOpened: true});
	};

	closeModalHandler = () => {
		this.setState({isModalOpened: false});
	};


	componentDidMount() {
		this.props.fetchData();
		console.log(this.props);
	}

	render() {
		return (
			<Fragment>
				<Modal
					animationType="slide"
					visible={this.state.isModalOpened}
				>
					<View>
						<Text>Dishes Modal</Text>
					</View>
					<View>
						<TouchableOpacity
							onPress={this.closeModalHandler}
						>
							<Text>Back</Text>
						</TouchableOpacity>
					</View>
				</Modal>

				<View style={styles.container}>
					<FlatList
						data={this.props.contacts}
						renderItem={(info) => (
							<TouchableOpacity onPress={this.openModalHandler}>
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
	}
});
