export class Point3 {
    constructor(private x?: number , private y?: number){
    }

    draw () {
        console.log("Inside Point3 class and draw method");
        console.log("X: "+this.x, "Y: "+this.y);
    }

}