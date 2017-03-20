var ACTIONS = {
	makeTasks: function() {
		console.log(STORE)
		console.log('makeTasks function in ACTIONS')
		STORE.set({
			tasksCollection: "hello there"
			singletask: "oh my god!"
		})
	}
}