console.log("Before Function Execute...");

var getDataFromAPI = async ()=>{
	  
	var resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	 var res = await resp.json();
	console.log(res);
    console.log("Type of resp is : "+typeof res);	
	console.log(res.id+" : "+res.userId+" : "+res.title);
	  
}
getDataFromAPI();

console.log("After Function Execute...");
