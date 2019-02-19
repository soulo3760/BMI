var bmi= function(weight,height)
{
  return weight/(height^2);
};
var weight= parseInt(prompt("enter you weight in kgs:"));
var height= parseInt(prompt("enter your height centimeter:"));
alert(result=bmi(weight,height));
