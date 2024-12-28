console.log("Before Function Execute...");

var check = (num)=>{
	
	var myfun = new Promise((resolve,reject)=>{
		(num%2==0) ? resolve("Even") : reject("Odd");
	}) 
	return myfun;
}
var num = 14;
var res = check(num);
res.then((res)=>{
	console.log("Given number is : "+res);
}).catch((result)=>{
	 console.log("Given number is : "+result);
})

console.log("After Function Execute...");
