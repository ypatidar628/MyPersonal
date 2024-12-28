//Async Function Using Promises
  console.log("Before Function Execution");
  function fun()
  {
     return new Promise((resolve,reject)=>{
	     resolve();
	   //reject();
	 })
  }
  
  var myfun = ()=>{
    fun().then(()=>{
	   console.log("Hello Students....");
	}).catch(()=>{
	  console.log("Hiii students...")
	})
  }
  
  myfun();
  console.log("After Function Execution");
