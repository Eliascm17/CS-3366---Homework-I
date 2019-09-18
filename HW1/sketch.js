let floors = [];
let Buttons = [];
var arrow, arrowdown, buttonPressMP3, OpenMP3, SirenMP3, ascendingMP3, DingMP3, PushButton, DoorsOpen;

//preloading function that load all files from assets folder
function preload(){
	//all sound user feedback sound bites
	soundFormats('mp3');
	ascendingMP3 = loadSound('assets/Elev_ascending.mp3');
	buttonPressMP3 = loadSound('assets/buttonPress.mp3');
	OpenMP3 = loadSound('assets/Open.mp3');
	SirenMP3 = loadSound('assets/Siren.mp3');
	DingMP3 = loadSound('assets/Ding.mp3');

	//arrows for visual fedback
	arrow = loadImage('assets/arrow.png');
	arrowdown = loadImage('assets/arrowdown.png');
}

//////////////////////////////////////////
//Setup function that runs once
function setup(){
	PushButton = true;
	DoorsOpen = true;
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

	//Initializing the special button objects into an array
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
		this.color1 = 255;
		this.color2 = 255;
		this.color3 = 255;
	}

	//show method that allows the object to be seen
	show(){
		strokeWeight(4);//perim of circle
		fill(this.color1,this.color2,this.color3);//fill of the circle
		ellipse(this.x, this.y, this.d, this.d);
		fill(0);//font color
		textSize(this.size);//text size
		text(this.label, this.x-this.minusX, this.y+this.plusY); //location	
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
		  this.floorLevel = 1;
	  }
	  //showing of the rectangle
	  show(){
		strokeWeight(1);
		fill(50);
		rect(this.x1, this.x2, this.x3, this.x4);
		strokeWeight(100);
		fill(255);
		textSize(150);
		text(this.floorLevel, width/2-35, 540);	
	  }
	  //up arrow
	  up(){
		image(arrow, 40, 395, 200,200);
		ascendingMP3.play();
	  }
	  //down arrow
	  down(){
		image(arrowdown, 310, 395, 200,200);
		ascendingMP3.play();
	
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
	
	for (let i = 0; i < 9; i++) {
		d = dist(mouseX, mouseY, Buttons[i].x, Buttons[i].y);
		//if mouse click is within one of the buttons
		if (d < 57.5) { 
		//when the button 911 is pushed
		 if (Buttons[i].label == '911' && PushButton == true){
			changeColorYellow(i);
			//Set timer here!
			SirenMP3.play();
			setTimeout(function (){
				changeColorWhite(i);
			}, 4000);
		 }
		 //when open or closed is pushed
		 if ((Buttons[i].label == 'Open' || Buttons[i].label == 'Close') && PushButton == true){
			if(Buttons[i].label == 'Open'){
				//if doors are already open then nothing happens
				if(DoorsOpen == true){
					DingMP3.play();
				}
				//if they are closed then open them
				else if(DoorsOpen != true){
					DoorsOpen = true;
					changeColorYellow(i);
					//Set timer here!
					setTimeout(function (){
					OpenMP3.play();
					changeColorWhite(i);
					}, 4000);
				}
			}
			else if(Buttons[i].label == 'Close'){
					//if doors are already open then you may close them
					if(DoorsOpen == true){
						DoorsOpen = false;
						changeColorYellow(i);
						//Set timer here!
						setTimeout(function (){
						OpenMP3.play();
						changeColorWhite(i);
						}, 4000);
					}
					//if they are closed then do nothing
					else if(DoorsOpen != true){
						DingMP3.play();
					}
			}
			
		 }
		 //when a number is pushed
		 else{
			 //if you are pressing a button that is equal to the level you're already on
			if(parseInt(Buttons[i].label) == Disp.floorLevel){
				DingMP3.play();
			}
			//if you press any other numbered button
			else{
				changeColorYellow(i);
				floors.push(parseInt(Buttons[i].label));
				buttonPressMP3.play();
				ElevatorLogic();
			}
		 }
		 buttonPressMP3.play();
		}
	}
	
}
  
function ElevatorLogic(){
	PushButton = False;
	up = floors.sort() // Ex:[1,3,5,6]
	down = floors.sort().reverse(); //Ex:[6,5,3,1]
	eachLevel = [1,2,3,4,5,6];

	//wrap this in a while true loop of some kind
	// while (floors.length > 0){
	// 	if 
	// }

}

//change button colors to yellow
function changeColorYellow(i){
	Buttons[i].color1 = 255;
	Buttons[i].color2 = 255;
	Buttons[i].color3 = 51;
}

//change button colors to white
function changeColorWhite(i){
	Buttons[i].color1 = 255;
	Buttons[i].color2 = 255;
	Buttons[i].color3 = 255;
}



