import React from 'react'

var Banner = React.createClass({
	_handleAll: function(){
		return(
			<div>
				
			</div>
		)
	},

	_handleDone: function() {
		console.log('done click function')
	}, 

	_handleUndone: function() {
		console.log('undone click function firin boys!!')
	},



	render: function(){
		return(
			<div className="banner">
				<div onClick={this._handleAll} className="all">all</div>
				<div onClick={this._handleDone} className="done">done</div>
				<div onClick={this._handleUndone} className="undone">undone</div>
				<input type="text" placeholder="input chores..." />
			</div>
		)
	}
})

export default Banner