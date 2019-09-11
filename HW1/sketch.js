//////////////////////////////////////////
//Setup function that runs once
function setup() {
	//canvas initialization
	createCanvas(550, 700);

	//reassigning variables to make writing code easier
	let w = width;
	let h = height;

	//arrays for x & y values of the button numbers 1-6 on the interface
	let xofNums = [w * .20, w * .50, w * .80, w * .20, w * .50, w * .80];
	let yofNums = [h * .17, h * .17, h * .17, h * .37, h * .37, h * .37, h * .87, h * .87, h * .87];

	//Initializing the number button objects as an array
	for(let i = 0; i < 6; i++){
		numButtons[i] = new numButtons(xofNums[i], yofNums[i], 120, i+1);
	}

	//Initializing the special button objects as an array
	for(let i = 0; i<3; i++){
		specButtons[i+6] = new specButtons(xofNums[i], yofNums[i], 120, null);
	}

	//new instance for the Display
	Disp = new Display(w*.1, h*.465, w*.8, h*.28);
	
}
//////////////////////////////////////////
//Class for the Buttons with numbers in the elevator
  class numButtons {
	//basic class constructor for each button
	constructor(x,y,d,label){
		this.x = x;
		this.y = y;
		this.d = d;
		this.label = label;
		this.alpha = 255;
	}

	//show method that allows the object to be seen
	show(){
		strokeWeight(3);
		fill(250,this.alpha);//fill of the circle
		circle(this.x, this.y, this.d);//circle
		fill(0);//font color
		textSize(55);//text size
		text(this.label, this.x-16, this.y+16); //location	
	}
	press(){
		fill(235, 213, 52);
		//user feedback here
		//sounds and other things HERE
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
	for (let i = 0; i < numButtons.length+2; i++){
		numButtons[i].show();
	}
	//displaying non-numbered buttons
	for (let i = 0; i < specButtons.length + 2; i++) {
		specButtons[i].show();
	}
}


//Implement the following two functions to create button effect / user feedback
function mousePressed() {
	for (let i = 0; i < numButtons.length; i++) {
		d = dist(mouseX, mouseY, numButtons[i].x, numButtons[i].y);
		if (d < 60) { 
			numButtons[i].press();
		}
	}
	//initiate user feedback here
  }
//////////////////////////////////////////
//second part in giving user feedback to the user
function mouseReleased(){
	// initiate sounds preceeding button press as well as the preceeding functions (logic) of the elevator
}
//////////////////////////////////////////

function ElevatorLogic(){

}