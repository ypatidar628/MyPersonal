console.log("Before Function Invoked : ");
  
  var employee = function(){
	  
	  this.getEmployeeData = ()=>{
		  
		 this.id = 1001;
      this.name = "Chiki";
      this.sal = 1234.46;	  
	  }
	    
	  
	  this.showEmployeeData = ()=>{
		
        console.log(this.id+" : "+this.name+" :"+this.sal);		
		  
	  }
  }
  var emp = new employee();
    emp.getEmployeeData();
   emp.showEmployeeData();
   
console.log("After Function Invoked : ");