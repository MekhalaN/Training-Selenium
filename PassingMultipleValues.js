
function demoAdd(a,b){

    return a+b
}
let res = demoAdd(2,3);

console.log(res);
console.log(demoAdd(20,30));

function demoAddAll(n){
    let output = 0;
  for(let i=0;i<n.length;i++)
  {
      output=output+n[i];
  }
  return output;
}
let arr=[10,20,30,40];
console.log(demoAddAll(arr));

function demoAdd2(...n)
{
let out = 0;
for (let i=0;i<n.length;i++)
{
    out = out+n[i]
}
  return out;
}

console.log(demoAdd2(4,5,7,1,9));

