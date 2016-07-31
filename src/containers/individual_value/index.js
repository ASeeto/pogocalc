'use strict';

import _ from 'lodash';
import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import AutocompleteInput from '../../components/autocomplete_input';
import BasicInput from '../../components/basic_input';

import styles from './styles';

import { pokemon, stardust } from '../../data';

/*
 *  Individual Value
 */
class IndividualValue extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemon: '',
			cp: '',
			hp: '',
			stardust: '',
			powered: false,
			show: false
		};
		this.onChangeText = this.onChangeText.bind(this);
		this.onRenderItem = this.onRenderItem.bind(this);
		this.onPress = this.onPress.bind(this);
	}

	filter(config) {
		let regex = _.get(config, 'regex', /[^A-Za-z]/g)
		let query = _.get(config, 'query', '').replace(regex, '');
		let searchRegex = new RegExp(`${query.trim()}`, 'i');
		let data = _.get(config, 'data', []);
		if (_.isEmpty(query) || !_.isString(query)) {
			return [];
		} else {
			return data.filter((d) => {
				return _.isNumber ? d.toString().search(searchRegex) >= 0 : d.search(searchRegex) >= 0;
			});
		}
	}

	onChangeText(text, stateProp, regex) {
		let newState = {};
		newState[stateProp] = text.replace(regex, '');
		this.setState(newState);
	}

	onRenderItem(d, stateProp) {
		return (
			<TouchableOpacity onPress={()=>{this.onPress(d, stateProp)}}>
				<Text style={styles.itemText}>
					{d}
				</Text>
			</TouchableOpacity>
		)
	}

	onPress(d, stateProp) {
		let newState = {};
		newState[stateProp] = _.isNumber(d) ? d.toString() : d;
		this.setState(newState);
	}

	render() {
		const results = {
			pokemon: this.filter({
				data: _.keys(pokemon),
				query: this.state.pokemon,
				regex: /[^A-Za-z]/g,
			}),
			stardust: this.filter({
				data: stardust,
				query: this.state.stardust,
				regex: /[^0-9]/g,
			})
		};
		return (
			<View style={styles.container}>
				{this.state.show ? <View style={styles.overlay}>
					<Text>OVERLAY EVERYTHING</Text>
				</View> : null}
				<View style={styles.container}>
					<View style={styles.title}>
						<Text>Individual Value Calculator</Text>
					</View>
					<View>
						<AutocompleteInput
							customContainerStyle={styles.autocompleteContainer4}
							data={results.stardust}
							defaultValue={this.state.stardust}
							onChangeText={(text) => { this.onChangeText(text, "stardust", /[^0-9]/g) }}
							placeholder={"Stardust"}
							renderItem={(d) => { return this.onRenderItem(d, "stardust") }}
						/>
						<BasicInput
							customContainerStyle={styles.autocompleteContainer3}
							placeholder="HP"
							onChangeText={(text) => { this.onChangeText(text, "hp", /[^0-9]/g) }}
						/>
						<BasicInput
							customContainerStyle={styles.autocompleteContainer2}
							placeholder="CP"
							onChangeText={(text) => { this.onChangeText(text, "cp", /[^0-9]/g) }}
						/>
						<AutocompleteInput
							customContainerStyle={styles.autocompleteContainer1}
							data={results.pokemon}
							defaultValue={this.state.pokemon}
							onChangeText={(text) => { this.onChangeText(text, "pokemon", /[^A-Za-z]/g) }}
							placeholder={"Pokemon"}
							renderItem={(d) => { return this.onRenderItem(d, "pokemon") }}
						/>
					</View>
				</View>
			</View>
		);
	}
};

export default IndividualValue;