import Backbone from 'backbone'
import {TaskCollection} from './models/taskModel'
import {TaskModel} from './models/taskModel'


var STORE = Object.assign({}, Backbone.Events, {
		data: {
			items: new TaskCollection(),
			
		},

		get: function(prop){
			
			if(this.data.items === undefined) {
				throw new Error ('the store does not have a property called: ', + prop)
			}
			return this.data[prop]
		},

		set: function(newAttributesObj){
			
			
			this.data = Object.assign(this.data, newAttributesObj)

			this.trigger('dataUpdated')
		},

})

export default STORE