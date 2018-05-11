var Vector = function (x, y) {
	var that = this;
  	that.x = x;
  	that.y = y;
  
    that.plus = function (vector){
    	return new Vector(that.x + vector.x, that.y + vector.y); 
    }
    
    that.minus = function (vector){
      return new Vector(that.x - vector.x, that.y - vector.y);
    }
    
    Object.defineProperty(that, 'length', {
    	get: function (){
          return Math.sqrt(Math.pow(that.y, 2) + Math.pow(that.x, 2));
    	}
    });
};

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5