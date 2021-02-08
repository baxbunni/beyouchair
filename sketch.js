let slider1;
let slider2;
let slider3;
let slider4;
let slider5;
let slider6;


let logotipo;
let ellipse_color;


function preload() {
  logotipo = loadImage('logotipo.png');
}


function setup() {
  createCanvas(600, 600);
  ellipse_color = color(255,198,0);
  
  slider1 = createSlider(40, 190, 81);
  slider1.position(10, 10);
  slider1.style('width', '100px');
  
  slider2 = createSlider(40, 190, 45);
  slider2.position(10, 30);
  slider2.style('width', '100px');
  
  slider3 = createSlider(40, 190, 78);
  slider3.position(10, 50);
  slider3.style('width', '100px');
  
  slider4 = createSlider(40, 190, 106);
  slider4.position(10, 70);
  slider4.style('width', '100px');
  
  slider5 = createSlider(40, 190, 42);
  slider5.position(10, 90);
  slider5.style('width', '100px');
  
  slider6 = createSlider(40, 190, 63);
  slider6.position(10, 110);
  slider6.style('width', '100px');
  
}


function draw() {
  background(255);
  noStroke();
  
  fill(0);
  textStyle(NORMAL);
  textSize(16);
  text('focus', 130, 25);
  text('balance', 130, 45);
  text('smart', 130, 65);
  text('relax', 130, 85);
  text('recharge', 130, 105);
  text('comfy', 130, 125);
  
  fill(ellipse_color);
  
  let r1 = slider1.value();
  let r2 = slider2.value();
  let r3 = slider3.value();
  let r4 = slider4.value();
  let r5 = slider5.value();
  let r6 = slider6.value();
  
  
  let aug1 = r1 * (-0.5);
  let aug2 = r2 * (-0.35);
  let aug3 = r3 * (-0.35);
  let aug4 = r4 * (-0.5);
  let aug5 = r5 * (-0.35);
  let aug6 = r6 * (-0.35);
  
  ellipse(375, 280 + aug1, r1, r1); // cerchio N
  ellipse(375 - aug2, 280 + aug2, r2, r2); // cerchio NE
  ellipse(375 - aug3, 280 - aug3, r3, r3); // cerchio SE
  ellipse(375, 280 - aug4, r4, r4); // cerchio S
  ellipse(375 + aug5, 280 - aug5, r5, r5); // cerchio SW
  ellipse(375 + aug6, 280 + aug6, r6, r6); // cerchio NW
  
  image(logotipo, 0, 0, width, height);
}