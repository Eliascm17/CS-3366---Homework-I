// let elevatorfont

// function preload() {
// 	elevatorfont = loadFont('ChessType.ttf');
//   }


function setup() {
	//canvas initialization
	createCanvas(550, 700);

	//reassigning variables to make writing code easier
	w = width;
	h = height;

	//top row of buttons
	one = new Buttons(w*.2, h*.15, 100, 1);
	two = new Buttons(w*.5, h*.15, 100, 2);
	three = new Buttons(w*.8, h*.15, 100, 3);

	//middle row of buttons
	four = new Buttons(w*.5, h*.35, 100, 4);
	five = new Buttons(w*.2, h*.35, 100, 5);
	six = new Buttons(w*.8, h*.35, 100, 6);

	//low special case buttons
	open = new Buttons(w*.5, h*.85, 100, 10);
	close = new Buttons(w*.2, h*.85, 100, 10);
	fire = new Buttons(w*.8, h*.85, 100, 10);

	//creating arrays for the buttons for use when creating functionality
	let buttons = [one, two, three, four, five, six];
	let special = [open, close, fire];
	
	//new object for the "Display"
	Disp = new Display(w*.1, h*.465, w*.8, h*.28);
}

//Class for the Buttons of the elevator
  class Buttons {
	constructor(x,y,r,num){
		this.x = x;
		this.y = y;
		this.r = r;
		this.num = num;
	}

	show(){
		strokeWeight(3);
		fill(255);
		circle(this.x, this.y, this.r);
		fill(0);
		textSize(45)
		text(this.num, this.x-13, this.y+13);
		fill(0);	
	}

  }

//Class for the use of the display
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

function draw(){

	background(115);
	
	one.show();
	two.show();
	three.show();
	four.show();
	five.show();
	six.show();
	Disp.show();

	// textSize(150);
	// textAlign(CENTER);
	// text(3, w*.5, height*.675);
	// fill(2);

}

// function changeButtonColor(){
// 	var val = 140;
// 	background(val);
// }

function mousePressed() {
	// Check if mouse is inside any of the 6 buttons that are numbered
	for(i = 0; i<6; i++){
		if (int(dist(mouseX, mouseY, butttons[i].x, buttons[i].y)) < 100) {
			fill(255);
		}
	}
  }