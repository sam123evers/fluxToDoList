import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import TheView from './views/theView'


const app = function() {
  var Router = Backbone.Router.extend({
  	routes: {
  		"": "handleTotalTasks",
  		'done': "handleCompleteTasks",
  		'undone': "handleIncompleteTasks" 
  	},

  	handleTotalTasks: function() {
  		ReactDOM.render(<TheView />, document.querySelector('.container'))
  	},

  	handleCompleteTasks: function() {
  		ReactDOM.render(<Done />, document.querySelector('.container'))
  	},

  	handleIncompleteTasks: function() {
  		ReactDOM.render(<Undone />)
  	}
  })
  new Router
  Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..