function log2(message){
    console.log(message);
}

var message = "Hello World";

log2(message);

function doSomething(){
    //for (let i=0 ; i<5; i++){  -> this way, finally i will be out of scope
    for (var i=0 ; i<5; i++){
        console.log(i);
    }
    console.log("finally: "+i);
}

doSomething();