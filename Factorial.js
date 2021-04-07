function findfactorial(n)
{
let res=1;
  for (let i=1;i<=n;i++)
      {
        res=res*i
       }
return res;
}
let r= findfactorial(10)
console.log("the factorial is " +r);