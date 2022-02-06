class Rectangle {
    constructor (width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
        this.render();
    }

    createTemplate(){    //Создание HTML разметки
        const area = this.calcArea();
        return `
            <div style="
            width:${this.width}px; 
            height:${this.height}px; 
            background-color: ${this.color}
            ">${area}px<sup>2</sup></div>             
        `
    }                                 //</sup> - делает надстрочные символы


    calcArea(){
        return this.width * this.height;
    }

    render(){
        document.body.innerHTML += this.createTemplate()    //Заменяет что есть в body на return`<div>...`

    }
}


// let rectangle1 = new Rectangle(70, 100, 'red');
// rectangle1.render();

// new Rectangle(100, 230, 'green').render();


let rect3 = new Rectangle(200, 200, 'yellow')