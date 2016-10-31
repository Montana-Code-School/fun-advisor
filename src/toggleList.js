

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

ToggleList.prototype.addToTextList = function(newInput){
	return new ToggleList(this.list.concat(newInput));
}


module.exports = ToggleList