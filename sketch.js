var laserCannon, laserCannonimg
var bullet

function preload(){
laserCannonimg = loadImage("jet.png")

}

function setup() {
 createCanvas(600, 600)
 laserCannon = createSprite(250, 550, 20, 20)
 laserCannon.addImage(laserCannonimg)
 laserCannon.scale = 0.2
} 

function draw() {
 background("black")

 if(keyDown("a")) {
    laserCannon.x -= 5
 } 

 if(keyDown("d")) {
    laserCannon.x += 5
 }
 
 if(keyDown("space")) {
   bullet.velocityY = -20
 }

 //bullet.x=500
 bullet.velocityX=laserCannon.X

 spawnBullets()

 drawSprites()
}
function spawnBullets() {
   bullet = createSprite(200,200,10,40)
}