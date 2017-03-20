import Backbone from 'backbone'

var STORE = Object.assign({}, Backbone.Events, {
		data: {
			ID: '',
			collection: []
		},

		set: function(newAttributesObj){
			this.data = Object.assign(this.data,newAttributesObj)
			this.trigger('dataUpdated')
		}
})

export default STORE