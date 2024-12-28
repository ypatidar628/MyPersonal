function check_even_odd(num,fun)
{
  (num%2==0) ? fun("even") : fun("odd");	
}

check_even_odd(8,(res)=>{
	 console.log("Given number is : "+res);
})