let video;  
let audio;


function setup() {
  createCanvas(500, 400);
  video = createCapture(VIDEO);
  video.size(500, 400);
  video.hide();

  audio = new p5.AudioIn();
  audio.start();

}

function draw() {
  let volume = audio.getLevel();
    image(video, 0, 0,);
 
}
