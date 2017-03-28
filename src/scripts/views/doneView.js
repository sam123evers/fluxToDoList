import React from 'react'


var DoneView = React.createClass({
	render: function(){
		console.log('DoneView render function')
		return(
			<div className="done-view">
				<ul>
					{this.props.items.map((item) => <CompleteTasks items={item} /> )}
				</ul>
			</div>
		)
	}
})

var CompleteTasks = React.createClass({
	render: function() {
		console.log('CompleteTask render function')
		return(
			<div className="complete-tasks">
				<li>hi there from the LI in completeTasks</li>
			</div>
		)
	}
})

export default DoneView