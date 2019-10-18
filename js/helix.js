class Helix{
  constructor(ballCount, colCount, velocity, canvas, ballRadius){
    this.canvas = canvas;   
    this.context = this.canvas.getContext('2d')
    this.colCount = colCount;
    this.velocity = velocity;
    this.ballCount = ballCount;
    this.ballRadius = ballRadius
    this.ballAnimList = []
    this.time = 0
  }

  init = () =>{
    this.createBallAnims()
    return this;
  }

  generateBallAnim = () =>{
    var balls = new BallAnim(this.context, this.ballCount, this.ballRadius)
    this.ballAnimList.push(balls)
  }

  createBallAnims = () =>{
    this.generateBallAnim()
    this.generateBallAnim()
  }

  update = () =>{
    this.time++   
    this.ballAnimList.map((balls, i) =>{
      var speed = this.time * this.velocity    
      var vShiftSpeed = speed + i * Math.PI;
      for(var j = 0; j< this.colCount; j++){
        balls.update(j ,vShiftSpeed)
        }
    })    
  }

  run = () =>{
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); 
    this.update()
    window.requestAnimationFrame(this.run)      
  }
}

var helixCanvas = document.getElementById('helix-canvas')
var container = document.getElementsByClassName('container')[0]
container.style.backgroundColor = 'black'

var colCount = 15;
var ballCount = 10;
var speed = 0.03;
var ballRadius = 10
var helix = new Helix(ballCount, colCount, speed, helixCanvas, ballRadius).init()
helix.run();


