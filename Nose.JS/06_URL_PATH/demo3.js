import path from 'path';

var my_path_1 = "C:/Users/Lenovo/"
var my_path_2 = "OneDrive"
var my_path_3 = "Desktop/demo";

/*C:/Users/Lenovo/OneDrive/Desktop/demo

var com_path = my_path_1 + my_path_2 + my_path_3;
console.log("My Path is : "+com_path);*/

var com_path = path.join(my_path_1,my_path_2,my_path_3);
console.log("My Path is : "+com_path);