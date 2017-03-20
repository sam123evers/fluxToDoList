import React from 'react'
import Banner from './components/banner'
import STORE from '../store'

var TheView = React.createClass({
	getInitialState: function() {
		return STORE.data
	},


	render: function() {
		console.log('theView render function')
		return (
			<div className="the-view">
				<Banner />
				
			</div>
		)
	}
})

var AllView = React.createClass({
	render: function() {
		console.log('AllView render function')
		return(
			<div className="all-view">
				<div>allView!</div>
			</div>
		)
	}
})

var DoneView = React.createClass({
	render:function() {
		return(
			<div className="done-view">
				<Banner />
				<div>done view</div>
			</div>
		)
	}
})

var UndoneView = React.createClass({
	render: function() {
		return(
			<div className="undone-view">
				<Banner />
				<div>undone view</div>
			</div>
		)
	}
})

export default TheView