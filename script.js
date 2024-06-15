let errorMsg = document.querySelector(".inputField p:nth-child(3)");
let inputTxt = document.getElementById("myNumber");
let outputMsg = document.querySelector(".outputSection p");

let calculateBtn = document.getElementsByClassName("btn")[0];

inputTxt.addEventListener("keyup",()=>{

  if(inputTxt.value==""){
    errorMsg.innerText="";
    outputMsg.innerText=""; 
    
  }else{

    if(!( Number.isInteger(parseInt(inputTxt.value)))){
      errorMsg.innerText="Integer only is Required !!";
      return;
    }
    else if(inputTxt.value.includes(",")){
      
      setTimeout(()=>{
        let inputArr=inputTxt.value.split(",");
            for (let i of inputArr){
              if(!( Number.isInteger(parseInt(i)))){
                errorMsg.innerText="Integer only is Required !!";
            return;
          }else{
            errorMsg.innerText="";
          }
        }
        },100)
        
               
    }else{
      errorMsg.innerText="";
      return;
    }
    
  }
    
  })
  
  calculateBtn.addEventListener("click",()=>{

  if(!(inputTxt.value.includes(","))){
    outputMsg.innerText = "Factorial is: "+ fact(inputTxt.value);
  }else{

    let arrayInput = (inputTxt.value).split(",");
    if(arrayInput.length==2){

      
      outputMsg.innerText=" Fibonacci Series is:  "+ fab(parseInt(arrayInput[0]),parseInt(arrayInput[1]));
      
    }else if(arrayInput.length==3){
      outputMsg.innerText = "Series is: " + seriesCal(parseInt(arrayInput[0]),parseInt(arrayInput[1]),parseInt(arrayInput[2])).join(', ');
    }else{
      outputMsg.innerText="";
    }


  }
  
});








let fab = (n, limit) => {
  let fibSequence = [n, n];
  if (limit <= 0) {

    return [];
  }
  if(n==0){
    outputMsg.innerText="Starting Number Should Not be Zero"
  }

  for (let i = 2; i < limit; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2]; 
  }
  
  console.log(fibSequence.slice(0, limit));
  return fibSequence.slice(0, limit);
}

let fact = (n)=>{
  if(n==0 || n==1){
    return 1;

  }else if(n>1){
    return n * fact(n-1);
  }
}

let seriesCal = (start, limit, gap) => {
  let series = [];
  let current = start;
  
  while (current <= limit) {
    series.push(current);
    current += gap;
  }

  return series;
}