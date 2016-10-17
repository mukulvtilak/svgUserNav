var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 1066;
canvas.height = 460;
var flag = false;
var keyPress = null;
var object = {
	height: 15,
	width: 15,
	x: 350,
	y: 30,
	color: "#FF0000"
}

var Obst =null;

var image = new Image();
image.src = "img/London_Bay/LondonBay.svg";

//obstacle array 		//new
var ObstArr = [
	{
		x:301,
		y:1,
		height:55,
		width:4
	},
	{
		x:301,
		y:5,
		height:4,
		width:282
	},
	{
		x:442,
		y:1,
		height:55,
		width:4
	},
	{
		x:583,
		y:1,
		height:55,
		width:4
	},
	{
		x:301,
		y:86,
		height:55,
		width:4
	},
	{
		x:301,
		y:141,
		height:4,
		width:282
	},
	{
		x:442,
		y:86,
		height:55,
		width:4
	},
	{
		x:583,
		y:86,
		height:55,
		width:4
	},
	{
		x:680,
		y:1,
		height:55,
		width:4
	},{
		x:684,
		y:5,
		height:4,
		width:282
	},
	{
		x:840,
		y:1,
		height:55,
		width:4
	},
	{
		x:996,
		y:1,
		height:55,
		width:4
	},
	{
		x:680,
		y:86,
		height:55,
		width:4
	},
	{
		x:684,
		y:141,
		height:4,
		width:312
	},
	{
		x:840,
		y:86,
		height:4,
		width:55
	},
	{
		x:996,
		y:86,
		height:55,
		width:4
	},
	{
		x:301,
		y:140,
		height:55,
		width:4
	},
	{
		x:301,
		y:144,
		height:4,
		width:282
	},
	{
		x:442,
		y:140,
		height:55,
		width:4
	},
	{
		x:583,
		y:140,
		height:55,
		width:4
	},
	{
		x:301,
		y:225,
		height:55,
		width:4
	},
	
	{
		x:301,
		y:280,
		height:4,
		width:282
	},
	{
		x:442,
		y:225,
		height:55,
		width:4
	},
	{
		x:583,
		y:225,
		height:55,
		width:4
	},
	{
		x:680,
		y:140,
		height:55,
		width:4
	},
	{
		x:684,
		y:144,
		height:4,
		width:312
	},
	{
		x:840,
		y:140,
		height:55,
		width:4
	},
	{
		x:996,
		y:140,
		height:55,
		width:4
	},
	{
		x:680,
		y:225,
		height:55,
		width:4
	},
	{
		x:684,
		y:280,
		height:4,
		width:156
	},
	{
		x:836,
		y:225,
		height:55,
		width:4
	},
	{
		x:836,
		y:280,
		height:55,
		width:4
	},
	{
		x:301,
		y:279,
		height:55,
		width:4
	},
	{
		x:301,
		y:284,
		height:4,
		width:282
	},
	{
		x:442,
		y:279,
		height:55,
		width:4
	},
	{
		x:301,
		y:336,
		height:55,
		width:4
	},
	{
		x:301,
		y:421,
		height:4,
		width:282
	},
	{
		x:442,
		y:366,
		height:55,
		width:4
	},
	{
		x:583,
		y:336,
		height:55,
		width:4
	},
	{
		x:587,
		y:366,
		height:90,
		width:35
	},
	{
		x:680,
		y:279,
		height:55,
		width:4
	},
	{
		x:684,
		y:284,
		height:4,
		width:156
	},
	{
		x:836,
		y:279,
		height:55,
		width:4
	},
	{
		x:836,
		y:284,
		height:4,
		width:78
	},
	{
		x:622,
		y:366,
		height:55,
		width:4
	},
	{
		x:625,
		y:421,
		height:4,
		width:282
	},
	{
		x:752,
		y:366,
		height:55,
		width:4
	},
	{
		x:882,
		y:366,
		height:55,
		width:4
	},
	{
		x:907,
		y:421,
		height:4,
		width:78
	},
	{
		x:985,
		y:366,
		height:55,
		width:4
	},
	{
		x:925,
		y:279,
		height:55,
		width:4
	},
	{
		x:925,
		y:225,
		height:55,
		width:4
	},
	{
		x:925,
		y:279,
		height:4,
		width:140
	},
	{
		x:925,
		y:283,
		height:4,
		width:140
	},

];

function drawPattern() {
	ctx.fillStyle = ctx.createPattern(image, "repeat");
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener('keydown', function (event) {
	keyPress = event.keyCode;
	detectObstacle();		//new
	action(keyPress);
});

function detectObstacle(){		//new
	var mockObject = {
		x : object.x + 5,
		y : object.y +5,
		height : object.height,
		width : object.width
	};
	for (var i = 0; i < ObstArr.length; i++) {
		if(isCollide(ObstArr[i],mockObject)){
			Obst = ObstArr[i];
			break;
		}
	}
}

function action(keyPressed) {
	//left
	if (keyPressed == 37) {
		console.log("Left Pressed");

		if ((Obst!=null) && isCollide(Obst, object)) {
			object.x -= (Obst.width+object.width);
		}
		else {
			object.x -= 1;
		}
	}
	//top
	else if ((Obst!=null) && keyPressed == 38) {
		console.log("Top Pressed");
		//object.y -= 1;

		if (isCollide(Obst, object)) {
			object.x -= (obj.height / 2);
			object.y -= (object.height / 2);
		}
		else {
			object.y -= 1;
		}
	}
	//right
	else if ((Obst!=null) && keyPressed == 39) {
		console.log("Right Pressed");

		if (isCollide(Obst, object)) {
			object.x += (Obst.width+object.width);
		}
		else {
			object.x += 1;
		}
	}
	//bottom
	else if ((Obst!=null) && keyPressed == 40) {
		console.log("Bottom Pressed");
		//object.y += 1;
		if (isCollide(Obst, object)) {
			object.x += (obj.height / 2);
			object.y += (obj.height / 2);
		}
		else {
			object.y += 1;
		}
	}
	keyPress = keyPressed = null;
}

function isCollide(Obst, object) {
	//if returned false object doesnt collide with Obst(acle)
	//all conditions are false if collision is detected
	return !(
		((Obst.y + Obst.height) < (object.y)) ||
		(Obst.y > (object.y + object.height)) ||
		((Obst.x + Obst.width) < object.x) ||
		(Obst.x > (object.x + object.width))
	);
}

function renderCanvas() {
	//draws backdround image before plotting the object
	//required to eraise the trail left by object movement
	drawPattern();
}
function renderObject() {
	//plots the object on canvas
	ctx.fillStyle = "#FF0000";
	//action(keyPress);
	ctx.fillRect(object.x, object.y, object.width, object.height);
}
function fun() {
	renderCanvas();
	renderObject();
}

setInterval(fun, 100);