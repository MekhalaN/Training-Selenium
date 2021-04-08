<<<<<<< HEAD
let states = ["ts","ap","tn","kn","mh"];
=======
let states = ["ts", "ap", "tn", "kn", "mh"];
>>>>>>> 7f993effe2a0517d31e42f3a45409cd19201390f

// fucntion to verify that a value exist in an array
console.log(isValueExist(states, "tn"));
console.log(isValueExist(states, "kn"));
console.log(isValueExist(states, "mh"));

<<<<<<< HEAD
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
=======
function isValueExist(lstData, Expect) {

    let isValueFound = false;// Flagging

    for (i = 0; i < lstData.length; i++) {
        if (lstData[i] == Expect) {
            isValueFound = true;
            break;//exist from loop
        }
    }
    return isValueFound;
>>>>>>> 7f993effe2a0517d31e42f3a45409cd19201390f
}

console.log(isValueExist1(states, "kl"));

<<<<<<< HEAD
function isValueExist1(lstData, Expect){

    for(i=0;i<lstData.length;i++)
  {
    if(lstData[i] == Expect){
        return true;
    }
  return false;
}
=======
function isValueExist1(lstData, Expect) {

    for (i = 0; i < lstData.length; i++) {
        if (lstData[i] == Expect) {
            return true;
        }
        return false;
    }
>>>>>>> 7f993effe2a0517d31e42f3a45409cd19201390f
}
