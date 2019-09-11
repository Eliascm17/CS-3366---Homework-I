
function setup() {
	//canvas initialization
	createCanvas(550, 700);

	//reassigning variables to make writing code easier
	w = width;
	h = height;
	a=255;

	let xofNums = [w*.2, w*.5,w*.8,w*.2, w*.5,w*.8];
	let yofNums = [h*.15,h*.15,h*.15,h*.35,h*.35,h*.35];

	for(let i = 0; i<6; i++){
		button[i] = new Buttons(xofNums[i], yofNums[i], 110, i+1);
	}
	
	//new object for the "Display"
	Disp = new Display(w*.1, h*.465, w*.8, h*.28);

	// //low special case buttons
	// open = new Buttons(w*.5, h*.85, 100, 10);
	// close = new Buttons(w*.2, h*.85, 100, 10);
	// fire = new Buttons(w*.8, h*.85, 100, 10);
	
	
	
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
		fill(255,255,255,a);
		circle(this.x, this.y, this.r);
		fill(0);
		textSize(45)
		text(this.num, this.x-13, this.y+13);
		fill(0);	
	}

  }

//Class for the use of the display
// 	class Display {
// 	  constructor(x1,x2,x3,x4){
// 		  this.x1 = x1;
// 		  this.x2 = x2;
// 		  this.x3 = x3;
// 		  this.x4 = x4;
// 	  }

// 	  show(){
// 		strokeWeight(1);
// 		fill(25);
// 		rect(this.x1, this.x2, this.x3, this.x4);
		
// 	  }

//   }

function draw(){

	for(let i = 0; i<6; i++){
		button[i].show();
	}

}

function mousePressed() {
	for(i =0; i<8; i++){

	}
  }

function mouseReleased(){

}