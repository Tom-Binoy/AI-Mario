function preload() {
	world_start = loadSound("world_start.wav");
	diefx = loadSound("mariodie.wav");
	jumpfx = loadSound("jump.wav");
	kickfx = loadSound("kick.wav");
	gameoverfx = loadSound("gameover.wav");
	coinfx = loadSound("coin.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas")

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("web")
	if(video){
		posenet = ml5.poseNet(video,modelLoaded);
		posenet.on('pose',gotPoses)
	}
}
function modelLoaded(){
	console.log("Model Loaded!")
}

function draw() {
	game()
}
window.addEventListener("keydown", function(e){if(e.key == "ArrowUp" || e.key == "ArrowDown") e.preventDefault();})

function gotPoses(results){
	if(results.length != 0){
		
		nose = results[0].pose.nose;
		nosey = nose.y;
		nosex = nose.x;
	}
}



