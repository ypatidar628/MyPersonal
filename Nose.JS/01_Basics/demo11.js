console.log("Before Function Invoked : ");
  
  var employee = function(){
	  this.id = 101;
      this.name = "Mahi";
      this.sal = 1234.45;	  
	  
	  this.showEmployeeData = ()=>{
		
        console.log(this.id+" : "+this.name+" :"+this.sal);		
		  
	  }
  }
  var emp = new employee();
   emp.showEmployeeData();
   
console.log("After Function Invoked : ");