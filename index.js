const resultValue = document.getElementById("result");
resultValue.addEventListener("click",()=>{
    const fromSystem = parseInt(document.getElementById("from").value);
    const toSystem = parseInt(document.getElementById("to").value);
    const fromValue = parseInt(document.getElementById("fromInput").value);
    if(fromValue !== ""){
      var ans = findValue(fromSystem, toSystem,fromValue);
    }
    else{
        alert("Please Enter Input value");
    }
    document.getElementById("toInput").value = ans;
});
function findValue(fS, tS, fV){
    let answer = 0;
    if (fS == tS){
        answer = fV;
    }
    else{
        answer = parseInt(fV, fS).toString(tS);
    }
    return answer;
}

const swapValue = document.getElementById("swap");
swapValue.addEventListener("click",()=>{
    const fromSystem = parseInt(document.getElementById("from").value);
    const toSystem = parseInt(document.getElementById("to").value);
    const temp = toSystem;
    document.getElementById("to").value = fromSystem;
    document.getElementById("from").value = temp;
});
