console.log("Before Function Invoked : ");
  
  var employee = function(){
	  
	  this.getEmployeeData = (id,name,sal)=>{
		  
		 this.id = id;
         this.name = name;
         this.sal = sal;	  
	  }
	    
	  
	  this.showEmployeeData = ()=>{
		
        console.log(this.id+" : "+this.name+" :"+this.sal);		
		  
	  }
  }
  var emp = new employee();
    emp.getEmployeeData(1001,"Piki",2123.34);  //call by value
   emp.showEmployeeData();
   
console.log("After Function Invoked : ");