//Async Function Using Promises
  console.log("Before Function Execution");
  function fun()
  {
     return new Promise((resolve,reject)=>{
	   //  resolve("Hello Students...");
	   reject("Hiiii Students...");
	 })
  }
  
  var myfun = async ()=>{
    var resp = await fun();
	console.log("Value of resp is : "+resp);
	console.log("Value of resp is : "+typeof resp);
  }
  
  myfun();
  console.log("After Function Execution");
