let floor;
let Buttons = [];
//preloading function that load all files from assets folder

//////////////////////////////////////////
//Setup function that runs once
function setup(){
	//canvas initialization
	createCanvas(550, 800);

	//reassigning variables to make writing code easier
	floors = [];
	let diam = 115;
	let w = width;
	let h = height;

	//arrays for x & y values of the button numbers 1-6 on the interface
	let xofNums = [w * .20, w * .50, w * .80, w * .20, w * .50, w * .80];
	let yofNums = [h * .17, h * .17, h * .17, h * .37, h * .37, h * .37, h * .87, h * .87, h * .87];
	let words = ['Open','Close','911'];

	//Initializing the number button objects as an array
	for(let i = 0; i < 6; i++){
		Buttons[i] = new numButtons(xofNums[i], yofNums[i], i+1);
	}

	//Initializing the special button objects as an array
	// for(let i = 6; i<9; i++){
	// 	Buttons[i] = new numButtons(xofNums[i], yofNums[i], words[i]);
	// }

	//new instance for the Display
	// Disp = new Display(w*.1, h*.465, w*.8, h*.28);
} 

//////////////////////////////////////////
//Class for the Buttons with numbers in the elevator
  class numButtons {
	//basic class constructor for each button
	constructor(x,y,label){
		this.x = x;
		this.y = y;
		this.d = 115;
		this.label = label;
		this.alpha = 255;
	}

	//show method that allows the object to be seen
	show(){
		strokeWeight(4);
		fill(255);//fill of the circle
		circle(this.x, this.y, this.d);
		fill(0);//font color
		textSize(62);//text size
		text(this.label, this.x-18, this.y+19); //location	
	}

	//For when the button gets pressed
	press(){
		strokeWeight(4);
		fill(158, 21, 21);
		circle(this.x, this.y, this.d);
		fill(0);
		textSize(62);
		text(this.label, this.x-18, this.y+19);
		//user feedback here
	}
  }

//////////////////////////////////////////
//Class for the buttons that aren't numbers i.e. open, close, emergency
class specButtons {
	//basic class constructor for each button
	constructor(x, y, d, label) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.label = label;
		this.alpha = 255;
	}
	//show method that allows the object to be seen	
	show() {
		// strokeWeight(3);
		fill(255, this.alpha);
		circle(this.x, this.y, this.d);
		fill(0);
		text(this.label, this.x - 13, this.y + 13);
		fill(0);
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
		fill(25);
		rect(this.x1, this.x2, this.x3, this.x4);
	  }

  }
//////////////////////////////////////////

//draw function that runs infinitely at every frame
function draw(){
	background(130);
	//displaying numbered buttons
	for (let i = 0; i < 6; i++){
		Buttons[i].show();
	}
}

//Implement the following two functions to create button effect / userfeedback
function mousePressed() {
	text(Buttons[i].y, 100,100);
	for (let i = 0; i < 6; i++) {
		d = dist(mouseX, mouseY, Buttons[i].x, Buttons[i].y);
		//if mouse click is within one of the buttons
		if (d < 57.5) { 
			text(d, 100,100);
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


