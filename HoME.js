var wall, thickness;
var bullet, speed, weight;

function preload() {

}
function setup() {
wall=createSprite(1200,200,thickness,height/2);
}
function draw() {
thickness=random(23,88);
speed=random(223,331);
weight=random(30,52);
drawSprites();
}
fuction hasCollided(lbullet, lwall) {
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge) {
    return true;
}
return false;
}