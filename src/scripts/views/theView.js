import React from 'react'
import ReactDOM from 'react-dom'
import Banner from './components/banner'
import STORE from '../store'
import DisplayList from './displayList'
import ACTIONS from '../actions'

var TheView = React.createClass({
	
	getInitialState: function() {
		return STORE.data
	},

	componentWillMount() {
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})	
	},


	render: function() {
		
		return (
			<div className="the-view">
				<Banner />
				<DisplayList items={this.state.items} />
				
			</div>
		)
	}
})


export default TheView