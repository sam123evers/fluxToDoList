import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'

var DisplayList = React.createClass({
	render: function() {
		
		return(
			<ul key={this.props.items}>
				{this.props.items.map((item) => <ItemComponent items={item} /> )}
			    
			</ul>
		)
	}
})

var ItemComponent = React.createClass({
	render: function() {
		
		
		return(
			<li key={STORE.data.items.models.cid}>
		{/*we map over the models array and for each model we assign the cid to the key*/}
				<p className="name">{this.props.items.get('taskDescription')} </p>
				
				<input className="done-click" onClick={() => ACTIONS.handleButtonClick(this.props.items.cid)} type="checkbox" name="chore" value="done" />
			</li>
		)
	}
})



export default DisplayList