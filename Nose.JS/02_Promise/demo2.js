console.log("Before Function Execute...");

var getDataFromAPI = ()=>{
	  
	var resp = fetch('https://jsonplaceholder.typicode.com/todos/1');
	
	resp.then(result=>result.json()).then((res)=>{
		console.log("Result is : "+res);
		console.log("String Result is : "+JSON.stringify(res))
		console.log(res.id+" : "+res.userId+" : "+res.title);
	}).catch((err)=>{
		 console.log("Error is : "+err);
	})
	
}
getDataFromAPI();

console.log("After Function Execute...");
