

function ToggleList(list){
	this.list = list ? list : []
}


// 
ToggleList.prototype.toggle = function(item){
	    var elementIndex = this.list.indexOf(item);
	    if(elementIndex === -1){ 
	    	return new ToggleList(this.list.concat(item));
		} else {
			var newArray = this.list.slice()
			newArray.splice(elementIndex, 1)
			return new ToggleList(newArray)
		}
}

ToggleList.prototype.addToTutorial = function(instruction){
	return new ToggleList(this.list.concat(instruction));
}


module.exports = ToggleList