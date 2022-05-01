function setup() {
    createCanvas(1000, 1000, WEBGL);
    background(235, 113, 52);
  
  translate(width / 4, height / 4);
  shearX(PI / 5.5);
    rect(-70, -750, 30, 1000);
  }
  
  function draw() {
    frameRate(30);
    
    push();  
    stroke(3);
    fill(235);
    rotateX(millis() / 1000);
    triangle(600, 100, 250, 400, 300, 100);
    pop();
    
    push();
    
    translate(-300, 0);
    fill(150);
    rotateX(millis() / 1000);
    triangle(300, 100, 100, 300, 80, 80);
    pop();
  }
  

  function keyPressed(){
    if (key == 's'){
        saveCanvas("sketch-14", "png");
    }
}