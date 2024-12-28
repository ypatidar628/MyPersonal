console.log("Before Function Execute...");

var fun = ()=>{
	
	var myfun = new Promise((resolve,reject)=>{
		//resolve()
	  reject();
	}) 
	return myfun;
}

var res = fun();
res.then(()=>{
	console.log("Hello Students....");
}).catch(()=>{
	 console.log("Bye Students.....");
})

console.log("After Function Execute...");
