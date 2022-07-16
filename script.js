const mainSquare=document.querySelector('#mainBoard');


const createBtn=document.querySelector('button');
console.log(createBtn);
createBtn.addEventListener('click', ()=>{
  let divsCount=document.querySelector('input').value;
  createDesk(divsCount)});



function checkDivs(){
  const check=document.querySelectorAll('div.coloredDivs');
  return check;
}

function createDivs(divsCount){
  for (let i=0; i<divsCount; i++){
    const squares=document.createElement('div');
    squares.classList.add('coloredDivs');
    squares.style.height="20px";
    squares.style.width="20px";
    squares.style.backgroundColor="grey";
    squares.style.border="1px solid black";
    mainSquare.appendChild(squares);}
    change();
}

function createDesk(divsCount){
  if (checkDivs().length!=0){
    checkDivs().forEach((element) =>{
      element.remove()})
  }
  createDivs(divsCount);
}

  function randomColor(){
    return ("#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6));
  }
  
  function selectDivs(){
    const hoverDivs=document.querySelectorAll('div.coloredDivs');
    return hoverDivs;
  }
  
  function change(){
    selectDivs().forEach((element) =>{
      element.addEventListener('mouseover', ()=>
      element.style.backgroundColor=randomColor());
    });
  }


  const propHover=document.getElementById('prop');
  propHover.addEventListener('mouseover', ()=>propHover.style.backgroundColor=randomColor());