function MyString(value){
	var newString = [];
	var currentToString = value;
	for (var i in value) {
		newString[i] = value[i];
	} 
	this.fakeToString = function(){
	    return currentToString;
	}
	this.fakeValueOf = function(){
		return value;
	}
	this.fakeCharAt = function(index){
		return newString[index];
	}
	this.fakeConcat = function(param){
		return value + param;
	}
	this.fakeSlice = function(sindex, eindex){
		var arr = [];
		if (eindex < 0){
			eindex = value.length + eindex;
		}
		if((sindex < 0 && eindex > value.length) || (sindex > value.length && (eindex > value.length || eindex < 0)))
			return "недопустимые значения начального и конечного индекса"
		if(sindex < 0 || sindex > value.length || sindex > eindex)
			return "error - недопустимое значение начального индекса"	
		if(eindex > value.length)
			return "error - недопустимое значение конечного индекса"
		
		for(var i = sindex; i < eindex; i++){
			arr.push(value[i]);
		}
		return arr.join('');
	}
}
var s = new MyString("hello");
console.log("s.fakeToString() result: " + s.fakeToString());//не забывать писать console.log!!!
console.log("s.fakeValueOf() result: " + s.fakeValueOf());
console.log("s.fakeCharAt result: " + s.fakeCharAt(2));
console.log("s.fakeConcat result: " + s.fakeConcat(' world'));
console.log("s.fakeSlice() result: " + s.fakeSlice(1, 3));

//console.log(s[0]);

//создать замыкание не удалось
//var inner = MyString();
//console.log(inner());