function drawBgr(ctx, bgrImg, k) 
{
	ctx.drawImage(bgrImg, 0,bgrImg.height-640-k, 640,640,  0,0,640,640); 
	
}

function drawDelta(ctx, deltaImg, spritePos, x,y) 
{
	var swd = deltaImg.width/4, shg = deltaImg.height;
	ctx.drawImage(deltaImg, spritePos*swd,0,swd,shg,  x,y,swd,shg); 
	
}

function isCollision(ctx, ctrlPts, spritePos, swd, x,y)
{
	for (var i=0; i<ctrlPts[spritePos].length; i++) {
		var ctrlp = ctrlPts[spritePos][i];
		var p = ctx.getImageData(x+ctrlp[0]-spritePos*swd, y+ctrlp[1], 1, 1).data;
		if (! (p[0]==39 && p[1]==145 && p[2]==227)) return true;  //water color
	}
	return false;
}
