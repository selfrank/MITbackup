<html><div id="particle" style="
  z-index:5;
  position:absolute;
  left:0px;
  top:0px;
  width:5px;
  height:5px;
  border-radius:50%;
  background:blueviolet ;
  background-size: 100%,100%;
  "></div></html>


//objects
function Particle(x, y, radius, color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI *2;
    this.velocity = 0.05;
    this.update = () => {
        //Move points over time
        this.radians += this.velocity
        this.x = x + Math.cos(this.radians) *
            randomIntFromRange(50,120);
        this.y = y + Math.sin(this.radians) *100;
        this.draw ();
    };

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius,0,
            Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
            c.closePath();
        };
    
    }

let particles;
function init(){
    particles = [];
    for(let i = 0; i<50; i++){
        particles.push(new Particle(canvas.width/2
        ,canvas.height /2, 5, 'blue'));
    } console.log(particles);
}


//Animation Loop
function animate() {
    requestAnimationFrame(animate);
    c.clearReact(0,0, canvas.width, canvas.height
        );
        particles.forEach(Particle => {
            particles.update();
        });
}
