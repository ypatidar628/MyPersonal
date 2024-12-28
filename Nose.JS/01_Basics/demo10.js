console.log("Before Function Invoked : ");
function check_even_odd(num,fun)
{
  if(num%2==0) 
  {
	setTimeout(()=>{
		fun("even")
	},4000);   
  }else
  {
	  setTimeout(()=>{
		  fun("Odd")
	  },5000);  
  }
}

check_even_odd(9,(res)=>{
	 console.log("Given number is : "+res);
})

console.log("After Function Invoked : ");