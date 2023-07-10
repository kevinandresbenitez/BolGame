import {direction,position} from '../DateTypes/index'

interface Entityes{
    position:position,
    width:number,
    height:number,
    draw(CanvasContext:CanvasRenderingContext2D):void,
    remove():void,
    updateLogic():void,
    action(arg:Entityes):void
}


export {Entityes}