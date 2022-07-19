const mainSquare=document.querySelector('#mainBoard');
let divsColor="";

const createBtn=document.querySelector('#btn');
console.log(createBtn);
createBtn.addEventListener('click', ()=>{
  let divsCount=document.querySelector('#numberOfDivs').value;
  createDesk(divsCount)}
);

  
const blackBtn=document.getElementById('blackWhite');
blackBtn.addEventListener('click', ()=>changeColor('white'));


const randomBtn=document.getElementById('randomColors');
randomBtn.addEventListener('click', changeRandom);

const userClrBtn=document.getElementById('pickColor');
userClrBtn.addEventListener('click', ()=>{
  let userColor=document.querySelector('#colorPicker').value;
  changeColor(userColor);
});




// checks nodelist
function checkDivs(){
  const check=document.querySelectorAll('div.coloredDivs');
  return check;
}

// creates given number of divs
function createDivs(divsCount){
  let pixel=500/divsCount;
  for (let i=0; i<divsCount; i++){
    const flexDivs=document.createElement('div');
    flexDivs.classList.add('flexColums');
    flexDivs.style.display="flex";
    flexDivs.style.flexDirection="column"
    mainSquare.appendChild(flexDivs);
    for (let m=0; m<divsCount; m++){
      const squares=document.createElement('div');
      squares.classList.add('coloredDivs');
      squares.style.height=`${pixel}px`;
      squares.style.width=`${pixel}px`;
      squares.style.backgroundColor="grey";
      squares.style.border="0.5px solid black";
      flexDivs.appendChild(squares);}
    }
    // change();
}

// checks if some divs is already on a board, if true > removes and creates given number
function createDesk(divsCount){
  if (checkDivs().length!=0){
    checkDivs().forEach((element) =>{
      element.remove()})
  }
  createDivs(divsCount);
}

// creates random color
  function randomColor(){
    return ("#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6));
  }

// makes divs change style 
  function selectDivs(){
    const hoverDivs=document.querySelectorAll('div.coloredDivs');
    return hoverDivs;
  }

  function changeRandom(){
    selectDivs().forEach((element) =>{
      element.addEventListener('mouseover', ()=>
      element.style.backgroundColor=randomColor());
    });
  }


  function changeColor(colorScheme){
    selectDivs().forEach((element) =>{
      element.addEventListener('mouseover', ()=>
      element.style.backgroundColor=colorScheme);
    });
  }