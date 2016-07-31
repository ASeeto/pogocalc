'use strict';

import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';

import IndividualValue from '../individual_value';
import LuckyEgg from '../lucky_egg';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import data from '../../data';
import styles from './styles';

/*
 *  Returns the main container for this application.
 */
class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollableTabView tabBarPosition="bottom">
				<IndividualValue tabLabel="IV" />
				<LuckyEgg tabLabel="Lucky Egg" />
			</ScrollableTabView>
		);
	}
}

export default Main;