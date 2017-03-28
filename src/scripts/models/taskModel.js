import Backbone from 'backbone'

export var TaskModel = Backbone.Model.extend({

	defaults: {
		taskDescription: '',
		complete: false
	}
})

export var TaskCollection = Backbone.Collection.extend({
	model: TaskModel
})