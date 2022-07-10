const mainSquare=document.querySelector('#mainBoard');

const squares=document.createElement('div');


const butnSmall = document.querySelector('#btnSmall');
butnSmall.addEventListener('click', ()=> createDesk(267));


const butnMedium = document.querySelector('#btnMedium');
butnMedium.addEventListener('click', ()=> createDesk(512));


const butnBig = document.querySelector('#btnBig');
butnBig.addEventListener('click', ()=> createDesk(768));


function createDesk(numberDivs){
  for (let i=1; i<numberDivs; i++){
    const squares=document.createElement('div');
    squares.style.height="20px";
    squares.style.width="20px";
    squares.style.backgroundColor="blue";
    squares.style.border="1px solid black";
    squares.style.margin="2px";
    mainSquare.appendChild(squares);}
  }