
import {Point3} from './Point'

let drawPoint1 = function(point) {
 console.log("Inside drawPoint");
 console.log(point.a);
 console.log(point.b);
}

drawPoint1 ({
    a: 10,
    b: 15
});


let drawPoint2 = function(point: {x: number, y: number} ) {  /// this is called inline annotation
    console.log("Inside drawPoint2");
    console.log(point.x);
    console.log(point.y);
}

drawPoint2 ({
    x: 12,
    y: 17
});

interface Point {
    x: number,
    y: number
}
 
let drawPoint3 = (point : Point) => {
    console.log("Inside drawPoint3");
    console.log(point.x);
    console.log(point.y);
}

let getDistance = (point1: Point, point2 : Point) => {
    //
}

drawPoint3 ({
    x: 14,
    y: 19
});

class  Point2 {
    x: number;
    y: number;
    draw() {
        console.log("inside class draw: x: "+ this.x+" y: "+this.y);
    }

    getDistance(){
        console.log("inside class getDistance: x: "+ this.x+" y: "+this.y);
    }
}

let point = new Point2;
point.x=1;
point.y=2;
point.getDistance();
point.draw();


class PointWithConstructor {
    private x: number;
    private y: number;

    constructor(x?: number, y?: number){ /// ? is to make the method parameter optional
        this.x = x;
        this.y = y; 
    }

    drawForConstructor() {
        console.log("inside class drawForConstructor: x: "+ this.x+" y: "+this.y);
    }

    getDistanceForConstructor(){
        console.log("inside class getDistanceForConstructor: x: "+ this.x+" y: "+this.y);
    }

}

let pointForConst = new PointWithConstructor(5, 6);
pointForConst.drawForConstructor();
pointForConst.getDistanceForConstructor(); 



class PointWithConstructor2 {

    constructor(private x?: number, private y?: number){ 
    }

    drawForConstructor() {
        console.log("inside class PointWithConstructor2: drawForConstructor: x: "+ this.x+" y: "+this.y);
    }

    getDistanceForConstructor(){
        console.log("inside class PointWithConstructor2: getDistanceForConstructor: x: "+ this.x+" y: "+this.y);
    }

    getX(){
        return this.x;
    }

    setX(value: number){
        if(value<0){
            throw new Error ("value can not be less than 0");
        }
        this.x = value;
    }
    // one more way for getter setter
    get X(){
        return this.x;
    }

    set X(value: number){
        if(value<0){
            throw new Error ("value can not be less than 0");
        }
        this.x = value;
    }


}

let pointForConst2 = new PointWithConstructor2(5, 6);
pointForConst2.drawForConstructor();
pointForConst2.getDistanceForConstructor(); 
pointForConst2.setX(1);
pointForConst2.drawForConstructor();
pointForConst2.X=3;
pointForConst2.drawForConstructor();

let point3 = new  Point3(1,2);
point3.draw();