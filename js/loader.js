//The loader
"use strict";


var app = app || {};

//keys
app.KEYBOARD = {
"KEY1": 65,
"S_KEY":83,
"D_KEY": 68,
"F_KEY": 70,
"J_KEY": 74,
"K_KEY": 75,
"L_KEY":76,
"SEMI_KEY": 186 
};

app.keydown = [];
//loader start
window.onload = function(){
	console.log("window.onload called");
	
	app.mainScript.drawLib = app.drawLib;
	app.mainScript.app = app;

	//events for each key
	window.addEventListener("keydown", function(e){
		app.keydown[e.keyCode] = true;
		if (!app.SWITCH){
		if(e.keyCode == 65) {app.mainScript.animate(0);}
		if(e.keyCode == 83) {app.mainScript.animate(1);}
		if(e.keyCode == 68) {app.mainScript.animate(2);}
		if(e.keyCode == 70) {app.mainScript.animate(3);}
		if(e.keyCode == 74) {app.mainScript.animate(4);}
		if(e.keyCode == 75) {app.mainScript.animate(5);}
		if(e.keyCode == 76) {app.mainScript.animate(6);}
		if(e.keyCode == 186) {app.mainScript.animate(7);}
		
		//sharps
		
		if(e.keyCode == 87) {app.mainScript.animate2(0);}
		if(e.keyCode == 69) {app.mainScript.animate2(1);}
		if(e.keyCode == 85) {app.mainScript.animate2(2);}
		if(e.keyCode == 73) {app.mainScript.animate2(3);}
		if(e.keyCode == 79) {app.mainScript.animate2(4);}
		
		//example song
		if(e.keyCode == 81) {
		app.SONGSWITCH = !app.SONGSWITCH;
		app.mainScript.songExample();}
		
		}
		
		//other
		if (e.keyCode== 32){
		app.SWITCH = !app.SWITCH;
			if (app.SWITCH){
			//draw instruction
			app.mainScript.drawThat();
			}
			else{
			//draw piano screen
			app.mainScript.drawIt();
			}
		}
		
		
	});
	
	//key up
	window.addEventListener("keyup", function(e){
		app.keydown[e.keyCode] = false;
		if (!app.SWITCH){
		app.mainScript.unanimate();
		}
		
	});
	//loader
	app.queue = new createjs.LoadQueue(false);
	app.queue.installPlugin(createjs.Sound);
	app.queue.on("complete", function(){
		app.mainScript.init();
	});
	//que sounds
	app.queue.loadManifest([
	{id: "cNote", src:"sound/cNote.mp3"},
	{id: "dNote", src:"sound/dNote.mp3"},
	{id: "eNote", src:"sound/eNote.mp3"},
	{id: "fNote", src:"sound/fNote.mp3"},
	{id: "gNote", src:"sound/gNote.mp3"},
	{id: "aNote", src:"sound/aNote.mp3"},
	{id: "bNote", src:"sound/bNote.mp3"},
	{id: "highCNote", src:"sound/highCNote.mp3"},
	{id: "sharpCNote", src:"sound/sharpCNote.mp3"},
	{id: "sharpDNote", src:"sound/sharpDNote.mp3"},
	{id: "sharpFNote", src:"sound/sharpFNote.mp3"},
	{id: "sharpGNote", src:"sound/sharpGNote.mp3"},
	{id: "sharpANote", src:"sound/sharpANote.mp3"}
	]);
	
	

	


	
	
	
	
	
}

