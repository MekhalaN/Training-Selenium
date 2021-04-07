let data = [10,20,20];
data.forEach(function (v){
   console.log(v);    
});
//short form for anonymous fucntion
data.forEach(v=>console.log(v));
data.forEach((v)=>console.log(v));
//short for Syntax
//anonymous function short form : ()=>{}
//() is optional if called fucntion having single paramenter
//{} is optional if called fucntion having single line
// this form is called Lambda expression. This is to symplify calling of the fucntion which contains single line

function calculator(x,y,act) {
  return act(x,y) 
}
console.log(calculator(2,3,function(a,b)
{
    return a+b
}));
console.log(calculator (20,30,(a,b)=>{return a+b}));
console.log(calculator (20,30,(a,b)=>a+b));
console.log(calculator (20,30,(a,b)=>a*b));
console.log(calculator (20,30,(a,b)=>a/b));
