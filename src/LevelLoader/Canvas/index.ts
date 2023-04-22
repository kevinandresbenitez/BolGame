export class CanvasManager{
    CanvasDomElement:HTMLCanvasElement
    ResiseEvent:void

    create= ():void=>{
        if(!this.CanvasDomElement){
            var element = document.createElement('canvas');
            element.id = 'canvas';
            element.width = window.innerWidth;
            element.height = window.innerHeight;
            document.body.appendChild(element);
            this.CanvasDomElement = element;
            this.ResiseEvent = window.addEventListener('resize',()=>{this.resize()})
        }

    }

    resize(){
        this.CanvasDomElement.width = window.innerWidth;
        this.CanvasDomElement.height = window.innerHeight;
    }

    delete= ():void=>{
        document.removeChild(this.CanvasDomElement);
        this.CanvasDomElement = null;
        window.removeEventListener("resize",()=>{this.ResiseEvent})
    }

    getContext = ():CanvasRenderingContext2D=>{
        return this.CanvasDomElement.getContext("2d");
    }

    clearCanvas = ():void=>{
        this.getContext().clearRect(0, 0, this.CanvasDomElement.width, this.CanvasDomElement.height);
        this.getContext().beginPath();
    }
}