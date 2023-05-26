import {direction,position} from '../DateTypes/index'

interface Entityes{
    position:position,
    width:number,
    height:number,
    draw(CanvasContext:CanvasRenderingContext2D):void,
    remove():void,
    updateLogic():void
}

interface EntityesMoviment{
    direction:direction,
    velosity:number,
    updatePosition():void,
}


export {Entityes,EntityesMoviment}