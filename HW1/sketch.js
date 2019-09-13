let floor = [];
let Buttons = [];
//preloading function that load all files from assets folder

//////////////////////////////////////////
//Setup function that runs once
function setup(){
	//canvas initialization
	createCanvas(550, 800);

	//reassigning variables to make writing code easier
	let diam = 115;
	let w = width;
	let h = height;

	//arrays for x & y values of the button numbers 1-6 on the interface
	let xofNums = [w * .20, w * .50, w * .80, w * .20, w * .50, w * .80, w * .20, w * .50, w * .80];
	let yofNums = [h * .17, h * .17, h * .17, h * .37, h * .37, h * .37, h * .87, h * .87, h * .87];
	let words = ['Open','911','Close'];

	//Initializing the number button objects as an array
	for(let i = 0; i < 6; i++){
		Buttons[i] = new numButtons(xofNums[i], yofNums[i], String(i+1));
	}

	//Initializing the special button objects as an array
	Buttons[6] = new numButtons(xofNums[6], yofNums[6], String(words[0]), 38, 48, 12);
	Buttons[7] = new numButtons(xofNums[7], yofNums[7], String(words[1]), 38, 29, 12);
	Buttons[8] = new numButtons(xofNums[8], yofNums[8], String(words[2]), 38, 49, 12);


	//new instance for the Display to give userfeedback
	Disp = new Display(w*.1, h*.48, w*.8, h*.28);
} 

//////////////////////////////////////////
//Class for the Buttons with numbers in the elevator
  class numButtons {
	//basic class constructor for each button
	constructor(x,y,label,size, minusX, plusY){
		this.x = x;
		this.y = y;
		this.d = 115;
		this.label = label;
		this.alpha = 255;
		this.size = size || 62;
		this.minusX = minusX || 18;
		this.plusY = plusY || 19;
	}

	//show method that allows the object to be seen
	show(){
		strokeWeight(4);
		fill(255);//fill of the circle
		circle(this.x, this.y, this.d);
		fill(0);//font color
		textSize(this.size);//text size
		text(this.label, this.x-this.minusX, this.y+this.plusY); //location	
	}

	//For when the button gets pressed
	press(){
		strokeWeight(4);
		fill(158, 21, 21);
		circle(this.x, this.y, this.d);
		fill(0);
		textSize(20);
		text(this.label, this.x-18, this.y+19);
		//user feedback here
	}
  }

//////////////////////////////////////////
//Class for the use of the display to give easy to understand information to the user
class Display {
	  constructor(x1,x2,x3,x4){
		  this.x1 = x1;
		  this.x2 = x2;
		  this.x3 = x3;
		  this.x4 = x4;
	  }

	  show(){
		strokeWeight(1);
		fill(50);
		rect(this.x1, this.x2, this.x3, this.x4);
	  }

  }
//////////////////////////////////////////

//draw function that runs infinitely at every frame
function draw(){
	background(130);
	//displaying numbered buttons
	for (let i = 0; i < 9; i++){
		Buttons[i].show();
	}
	//displaying the display
	Disp.show();
}

//Implement the following two functions to create button effect / userfeedback
function mousePressed() {
	text(Buttons[i].y, 100,100);
	for (let i = 0; i < 9; i++) {
		d = dist(mouseX, mouseY, Buttons[i].x, Buttons[i].y);
		//if mouse click is within one of the buttons
		if (d < 57.5) { 
			Buttons[i].press();
			// floors.push(i);
			// ElevatorLogic();
			//setTimeout(function(){ alert("Hello"); }, 3000); for sounds and other things 
		}
	}
	//initiate user feedback here
  }
//////////////////////////////////////////

function ElevatorLogic(){
	 //go towards that floor and at some point let the button go back to white
}


