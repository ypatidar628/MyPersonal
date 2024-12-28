console.log("Before Function Invoked : ");
  
  var employee = function(id,name,sal){
	  
		 this.id = id;
         this.name = name;
         this.sal = sal;	  
	  
	  this.showEmployeeData = ()=>{
		
        console.log(this.id+" : "+this.name+" :"+this.sal);		
		  
	  }
  }
  var emp = new employee(1001,"Piki",2123.34);  //Parameterized Object
   emp.showEmployeeData();
   
console.log("After Function Invoked : ");