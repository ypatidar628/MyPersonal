export function demo()
{
 console.log("module test-2 , demo function invoked");    
}

export var show = (x,y)=>{
    console.log("module test-2,show function invoked : "+x+" : "+y);
}

export var a=10;

export var b;
b=20;

var c=30;
export default c;