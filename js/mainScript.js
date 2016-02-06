//main script where everything happens
'use strict'

var app = app || {};

app.mainScript = {

// CONSTANT properties
    WIDTH : 720, 
    HEIGHT: 480,
	KEY_WIDTH: 40,
	KEY_WIDTH2: 20,
	KEY_HEIGHT: 200,
	KEY_HEIGHT2: 150,
    canvas: undefined,
    ctx: undefined,
	SWITCH: true,
	SONGSWITCH: false,
	drawLib: undefined,
	keys: [],
	keys2: [],
	app: undefined,

	
	init: function(){
			console.log("MAIN called");
			// declare properties
			
			this.canvas = document.querySelector('canvas');
			this.canvas.width = this.WIDTH;
			this.canvas.height = this.HEIGHT;
			this.ctx = this.canvas.getContext('2d');
			this.initKeys();
			
			//draws piano screen
			this.drawIt();
		

			
	
	},
	

	
	initKeys: function(){
	
	var rect = function(){
		return{x:this.x, y: this.y, width: this.width, height: this.height};
	}
	
	//make all the keys
	//white keys
	for (var i = 0; i < 8; i++){	
			
			var xVal = this.KEY_WIDTH * (i * 1.2) + i + 0.5;
			this.keys.push( {x: xVal + 170, y: 200, width: this.KEY_WIDTH, height: this.KEY_HEIGHT, color: "white",  rect: rect});
					
		}
		
	//sharps
	
	for (var i = 0; i <2; i++){
		var xVal2 = this.KEY_WIDTH2 * (i * 2) + i + 0.5;
		this.keys2.push( {x: xVal2 + 209, y: 190, width: this.KEY_WIDTH2, height: this.KEY_HEIGHT2, color: "black",  rect: rect});
	}
 //sharp kets
	for (var i = 0; i <3; i++){
		var xVal2 = this.KEY_WIDTH2 * (i * 2.4) + i + 0.5;
		this.keys2.push( {x: xVal2 + 350, y: 190, width: this.KEY_WIDTH2, height: this.KEY_HEIGHT2, color: "black",  rect: rect});
	}
	
	},
	//draw everything in the piano screen
	drawIt: function(){
			
		this.drawLib.rect(this.ctx, 10,10,700,460,"#C8C8C8");
		this.drawLib.rect(this.ctx,10,10,700,20,"black");
		this.drawLib.text(this.ctx,"Javascript Piano",315,23,12,"white");		
		//draw the keys
		for (var i = 0; i < this.keys.length; i++)
		{
			var key = this.keys[i];
			this.ctx.fillStyle = key.color;
			this.ctx.fillRect(key.x, key.y, key.width, key.height);
			
		}
		
		for (var i = 0; i < this.keys2.length; i++)
		{
			var key = this.keys2[i];
			this.ctx.fillStyle = key.color;
			this.ctx.fillRect(key.x, key.y, key.width, key.height);
			
		}
		//draw information
		this.drawLib.text(this.ctx, "Press space to see instructions", 210,450, 18, "black");
		
	},
	
	//draw the instruction screen
	drawThat: function(){
	this.drawLib.rect(this.ctx, 10,10,700,460,"#000000");
	this.drawLib.text(this.ctx, "The Javascript Piano",200,50, 30, "white");
	this.drawLib.text(this.ctx, "Play a piano with you're keyboard!", 200, 100, 18, "white");
	this.drawLib.text(this.ctx, "Use the keys A, S, D, F, J, K, L, and ';'" ,180,135,18,"white");
	this.drawLib.text(this.ctx, "to play the white keys.", 250,160,18, "white");
	this.drawLib.text(this.ctx, "Use the keys W, E, U, I, and O to play the black keys.", 110,195,18,"white");
	this.drawLib.text(this.ctx, "Press q to see an example song", 225,240,18, "white");
	this.drawLib.text(this.ctx, "Sounds are from freesound.org from:" , 200, 275, 18, "white");
	this.drawLib.text(this.ctx, "stomachache's ukelele sound library", 200,300,18, "white");
	this.drawLib.text(this.ctx, "Coded by Aaron Miller", 250, 350, 18, "white");
	this.drawLib.text(this.ctx, "Press space bar to go between this screen and the piano.", 90,400, 18, "white");
	},
	
	//animate the keys
	animate: function(i){

		var key = this.keys[i];
		this.ctx.fillStyle = "red";
		this.ctx.fillRect(key.x,key.y, key.width, key.height);
		switch(i){
		case 0:
			createjs.Sound.play("cNote");
			break;
		case 1:
			createjs.Sound.play("dNote");
			break;
		case 2:
			createjs.Sound.play("eNote");
			break;
		case 3:
			createjs.Sound.play("fNote");
			break;
		case 4:
			createjs.Sound.play("gNote");
			break;
		case 5:
			createjs.Sound.play("aNote");
			break;
		case 6:
			createjs.Sound.play("bNote");
			break;
		case 7:
			createjs.Sound.play("highCNote");
			break;
		
		}
	
	},
	//animate the sharp keys
	animate2: function(i){

		var key = this.keys2[i];
		this.ctx.fillStyle = "red";
		this.ctx.fillRect(key.x,key.y, key.width, key.height);
		switch(i){
		case 0:
			createjs.Sound.play("sharpCNote");
			break;
		case 1:
			createjs.Sound.play("sharpDNote");
			break;
		case 2:
			createjs.Sound.play("sharpFNote");
			break;
		case 3:
			createjs.Sound.play("sharpGNote");
			break;
		case 4:
			createjs.Sound.play("sharpANote");
			break;
		
		}
	
	},
	
	
	//animate back to normal
	unanimate: function(){
	if (this.SWITCH){
	for (var i = 0; i < this.keys.length; i++)
		{
			var key = this.keys[i];
			this.ctx.fillStyle = "white";
			this.ctx.fillRect(key.x, key.y, key.width, key.height);
			
		}
		
	for (var i = 0; i < this.keys2.length; i++)
		{
			var key = this.keys2[i];
			this.ctx.fillStyle = "black";
			this.ctx.fillRect(key.x, key.y, key.width, key.height);
			
		}
		}
	},
	
	//song example
	songExample: function(){
	if (this.SWITCH){
		this.drawLib.text(this.ctx,"Ode to Joy",290,70,24,"black");
		this.drawLib.text(this.ctx,"D-D-F-J-J-F-D-S-A-A-S-D-D-S-S", 215,100,18, "black");
		}
	}
	
	
	
	

	
	
	};

