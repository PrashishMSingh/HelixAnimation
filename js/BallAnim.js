class BallAnim{
    constructor(context, ballCount, radius){
      this.context = context;
      this.ballCount = ballCount;    
      this.maxCircleRadius = radius; 
      this.ballVGap = 15;
      this.ballHGap = 18;
      this.amplitude = 40;
      this.frequency = 2
      this.topPad = 50;
      this.leftPad = 50;
    }

    gradColor = (ballInd) =>{
        var red = 299 
        var blue = 119
        var green = 87 
        red += ballInd * 8
        blue -= ballInd * 8
        return `rgb(${red}, ${blue}, ${green})`
    }

    update = (colInd, vShift) =>{
        var xPos = colInd * this.ballHGap + this.leftPad;
        var colIndShift = this.frequency * (colInd * Math.PI) / this.amplitude;    
        for(var ballInd = 0; ballInd < this.ballCount; ballInd++){ 
            var yPos =  this.topPad + ballInd * this.ballVGap +  Math.sin(vShift + colIndShift) * this.amplitude;
            var changeSize = (Math.cos(vShift - (ballInd * 0.1) + colIndShift) + 1)/2;        
            var radius = changeSize * this.maxCircleRadius;
            
            this.draw(xPos, yPos, radius, this.gradColor(ballInd));
        }
    }
    
    draw = (xPos, yPos, radius, color) =>{     
        this.context.beginPath();
        this.context.arc(xPos, yPos, radius, 0, Math.PI * 2, false);
        this.context.fillStyle = color;
        this.context.fill();
        this.context.closePath();
      }      
  
  }
  