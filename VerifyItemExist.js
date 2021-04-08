let states = ["ts","ap","tn","kn","mh"];

// fucntion to verify that a value exist in an array
console.log(isValueExist(states, "tn"));
console.log(isValueExist(states, "kn"));
console.log(isValueExist(states, "mh"));

function isValueExist(lstData, Expect){

    let isValueFound=false;// Flagging

    for(i=0;i<lstData.length;i++)
  {
    if(lstData[i] == Expect){
        isValueFound = true;
        break;//exist from loop
    }
  }
  return isValueFound;
}

console.log(isValueExist1(states, "kl"));

function isValueExist1(lstData, Expect){

    for(i=0;i<lstData.length;i++)
  {
    if(lstData[i] == Expect){
        return true;
    }
  return false;
}
}
