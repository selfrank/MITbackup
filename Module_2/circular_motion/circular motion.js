

    //initial setup
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');
    canvas.width = innerWidth;
    canvas.height = innerHeight;

//Variables
const mouse = {
    x:innerWidth/2,
    y:innerHeight/2
};
const colors = [
    '#2185C5',
    '#7ECEFD',
    '#FFF6E5',
    '#FF7F66'
];
//Event Listeners
addEventListener('mousemove', event =>{
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

//Utility Functions
function randomIntFromRange (min,max) {
    return Math.floor(Math.random() * (max-min+1)+min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}
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
        console.log(Math.cos(this.radians)*100);
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
//loop//
let particles;
function init(){
    particles = [];
    for(let i = 0; i<10; i++){
        particles.push(new Particle(canvas.width/2
        ,canvas.height /2, 5, 'blue'));
        console.log(particles);
    } 
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
