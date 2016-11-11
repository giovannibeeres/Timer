"use strict"

// process.hrtime

const
SEC = 1e3,
MIN = 6e4,
HOUR = 36e5

let
Timer = function(){
	// MICROSECONDS BASED
	
	this.starttime = 0
	
	this.then = 0
	this.now = 0
	
	this.delta = 0
	this.elapsed = 0
	
	this.μs = 0
	this.sec = 0
	
	this.offset = 0
}

Timer.prototype = {
	start:function(offset){
		// let hrT = process.hrtime() 
		// hrT[0] * 1000000 + hrT[1]
		let hr = process.hrtime()
		this.starttime = this.now = (hr[0] * 1e9 + hr[1]) / 1e6
		this.offset = offset || 0
	},
	
	update:function(){
		this.then = this.now
		let hr = process.hrtime()
		this.now = (hr[0] * 1e9 + hr[1]) / 1e6
		
		this.delta = this.now - this.then
		this.elapsed = this.now - this.starttime + this.offset
		
	},
	
	msToString:function(num){
		return struct.msToString( typeof num == "number" ? num : this.elapsed )
	}
}

let
struct = function(){ return new Timer() }

struct.msToString = function(num){
	if(num > 0){
		let str = "", digit = 0
		
		num = Math.floor(num)
		
		// SEC
		digit = Math.floor(num / SEC) % 60
		str = ( digit > 9 )? digit.toString() : "0" + digit.toString()
		
		// MIN
		digit = Math.floor((num % HOUR) / MIN)
		str = ( digit > 9 )?(digit.toString() + ":" + str):("0" + digit.toString() + ":" + str)
		
		// HOUR
		digit = Math.floor(num / HOUR)
		if(digit > 0) str = ( digit > 9 )?(digit.toString() + ":" + str):("0" + digit.toString() + ":" + str)
		
		
		return str
	}else{
		return "00:00"
	}
}

// Number.prototype.msToString = function(){ return struct.msToString(this) }

exports = module.exports = struct
