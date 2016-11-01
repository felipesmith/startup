EventEmitter.call(Movie.prototype);
Social.call(Movie.prototype);
function Movie(name, year, duration){
	this.name=name;
	this.year=year;
	this.duration=duration;
	this.cast= new Array;
	this.play=function(){
		this.func('play');
	};
	this.pause=function(){
		console.log("The movie is paused");
	};
	this.resume=function(){
		console.log("The movie is back on track");
	};
	this.addCast=function(actor){
		if(Array.isArray(actor)){
			for (var i = actor.length - 1; i >= 0; i--) {
				this.cast[this.cast.length]=actor[i];
			}
		}
		else{
			this.cast[this.cast.length]=actor;
		}
	};
	
};

$(document).ready(function(){

	var movie= new Movie("The fellowship of the ring",2001,178);
	var movie2=new Movie("The two towers",2002,179);
	var movie3=new Movie("The return of the King",2003,200);
	var actor= new  Actor('Arnold Schwarzenegger', 50);
	movie.addCast(actor);
	var logger = new Logger();
	movie.on('play', logger.log);
	movie.play();
	Object.assign(movie, Social);
	movie.share('Felipe');
});
function Actor(name, age){
	this.name=name;
	this.age=age;
}

function EventEmitter(){
	this.listener;
	this.func;
	this.on = function(e, _callback){
		this.listener = e;
		this.func = _callback;
	}

	this.emit = function(event){
		if(event==this.listener){
			this.func();
		}
	}
	this.off=function(){
		this.func=null;
		this.listener=null;
	}
}

function Logger(){
	this.log=function(info){
		console.log(info);
	}
}

function Social(movie){
	this.like = function(friendName){
		console.log(friendName+" likes "+this.name);
	}
	this.share = function(friendName){
		console.log("Share "+this.name+" with "+friendName);
	}

}
