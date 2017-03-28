import STORE from './store'
import DisplayList from './views/displayList'
import {TaskCollection} from './models/taskModel'
import {TaskModel} from './models/taskModel'

var itemsList = STORE.data.items

var ACTIONS = {
	addTask: function(newTask) {
		var enteredTask = new TaskModel({
			taskDescription: newTask
		})
		//add the task to the items list in our store
		//set the new list, now 1 task bigger, on the store, causing the view to...
		//...rerender and reflect that change
		var allTasks = STORE.get('items')
		allTasks.add(enteredTask)
		STORE.set({
			items:allTasks
		})
	},

	// make a new function that retrieves the collection that is separate from addTask
	//store.set should be in this function kenjis is called fetchAllTasks
	// fetchAllTasks: function() {
	// 	STORE.set({
	// 		singleTask: newTask
	// 	})
	// },	
	
	handleButtonClick: function(cid) {
		// console.log('handleButtonClick')
		// console.log(itemsList)
		
		for(var i = 0; i < itemsList.models.length; i++) {
			if(itemsList.models[i].cid === cid){
				itemsList.models[i].attributes.complete = true
			}
		}
		STORE.set()
	},

	_handleAll: function() {
		location.hash = '/all'
		STORE.set({
			items: itemsList
		})
	},

	_handleDone: function() {
		location.hash = '/done'
		var doneCollection = new TaskCollection
		for(var i = 0; i < itemsList.models.length; i++) {
			if(itemsList.models[i].attributes.complete === true) {
				doneCollection.add(itemsList.models[i])
				STORE.set({
					items: doneCollection
				})
			}

		}
	}, 

	_handleUndone: function() {
		location.hash = '/undone'
		var undoneCollection = new TaskCollection
		for(var i = 0; i < itemsList.models.length; i++) {
			if(itemsList.models[i].attributes.complete === false) {
				undoneCollection.add(itemsList.models[i])
				STORE.set({
					items: undoneCollection
				})
			}
		}
		
		
	},

}

export default ACTIONS