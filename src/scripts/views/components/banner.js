import React from 'react'
import ACTIONS from '../../actions.js'
import DisplayList from '../displayList'
import DoneView from '../doneView'


var Banner = React.createClass({
	_handleSubmit: function(e){
		
		e.preventDefault()
		var newTask = e.target.task.value
		ACTIONS.addTask(newTask)
		e.target.reset()
	},

	render: function() {
		return (
			<div className="banner">

				<div onClick={ACTIONS._handleAll} className="all">all</div>
	 			<div onClick={ACTIONS._handleDone} className="done">done</div>
	 			<div onClick={ACTIONS._handleUndone} className="undone">undone</div>
				<form onSubmit={this._handleSubmit}>
					<input name='task' placeholder='Enter a task' />
					<button type="submit">Submit</button>
				</form>


			</div>
		)
	},
})

export default Banner