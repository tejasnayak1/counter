const mainTitle = document.querySelector("#title");
let curVal  = 0;
const btnDecrement = document.querySelector("#decrement");
const btnincrement = document.querySelector("#increment");
const btnresect = document.querySelector("#reset");

btnincrement.addEventListener("click",() =>{
       curVal++;
    mainTitle.textContent = curVal;
 
});

btnDecrement.addEventListener("click",() =>{
    curVal--;
    mainTitle.textContent = curVal;
});

btnresect.addEventListener("click",()=>{
    curVal = 0;
    mainTitle.textContent = curVal;
});
