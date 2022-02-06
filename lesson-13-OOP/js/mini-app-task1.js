const body = document.querySelector('body')

class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
        let img = document.createElement('img');
        img.setAttribute('src', this.imgUrl)
        this.html = img;
        body.style.background = "black"
        this.render();

    }
    
    render() {
        body.appendChild(this.html)
        this.html.style.position = 'fixed';
        this.html.style.top = this.top + 'px';
        this.html.style.left = this.left + 'px';
        this.html.style.width = this.width + 'px';
    }
  
    moveUp() {
        this.top -= 20
        this.render();
    }
    moveDown() {
        this.top += 20
        this.render();
    }
    moveLeft() {
        this.left -= 20
        this.render();
    }
    moveRight() {
        this.left += 20
        this.render();
    }
  }
  
  const imgUrl = 'https://bit.ly/2tcDito';
  var mfLogotip = new Logo(imgUrl);
  console.log(mfLogotip);
  
  // запускаем наше микро-приложение
  mfLogotip.init();
  
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  // something else, чтобы всё работало



  class Circle {
    constructor(size, color){
        this.width = size;
        this.height = size;
        this.color = color;
        this.render();
    }

    createTemplate(){    
        return `
            <div style="
            width:${this.width}px; 
            height:${this.height}px; 
            background-color: ${this.color};
            border-radius: 100px;
            "></div>`
    }    

    render(){
        document.body.innerHTML += this.createTemplate();
    }
  }

  let circle1 = new Circle(100, 'yellow');



  class Calculator{
    constructor(num1, num2){
        this.num1 = Number(prompt());
        this.num2 = Number(prompt());
    }

    sum(){
        console.log(this.num1 + this.num2)
    }

    mul(){
        console.log(this.num1 * this.num2)
    }
  }

  let count = new Calculator();
  console.log(count);
  count.sum();
  count.mul()