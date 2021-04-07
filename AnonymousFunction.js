let dm = function () {
    console.log("function called");
    
}
dm()

//call back
function calculator(x,ya,act) {
    act(x,ya);
    
}

calculator(10,20,function (a,b) {
    console.log(a+b);
    
});

calculator(10,20,function (a,b) {
    console.log(a-b);    
});

let data =[10,20,30];

for (let i=0;i<data.length;i++) { // index based for loop
   console.log(data[i]);  
}
for (let i of data){   //advance for loop
    console.log(i);
 
}
//for each internal loop
data.forEach(function (v) {
    console.log(v);
   
});