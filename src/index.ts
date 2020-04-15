import P5 from 'p5'

const sketch = (p5: P5) => {
  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight)
  }

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.frameRate(60)
    p5.textSize(40)
    p5.textFont('Georgia')
    console.log('hello world')
  }

  p5.draw = () => {
    p5.background('black')
    const dimension = Math.min(
      window.innerWidth,
      window.innerHeight,
    )
    p5.ellipse(
      window.innerWidth / 2,
      window.innerHeight / 2,
      (Math.sin(Date.now() / 500) + dimension / 2 / 5) * 5,
      (Math.sin(Date.now() / 500) + dimension / 2 / 5) * 5,
    )

    p5.fill(255)
    p5.text('Hello', 50, 50)
    p5.text('Hello by me', 50, 50)
  }
}

new P5(sketch)
