"use strict";
var app = app ||{};

//drawinglibrary for rectangles and texts

app.drawLib = {

	rect: function(ctx,x,y,w,h,col){
		ctx.save();
		ctx.fillStyle = col;
		ctx.fillRect(x,y,w,h);
		ctx.restore();
	},
	
	text : function (ctx, string, x, y, size, col) {
		ctx.save();
		ctx.font = 'bold ' + size + 'px Monospace';
		ctx.fillStyle = col;
		ctx.fillText(string,x,y);
		ctx.restore();
	}
	
	
	
	


};