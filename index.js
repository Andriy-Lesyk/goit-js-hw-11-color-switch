const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const mainCol = document.querySelector('body');
console.log(mainCol)
const btns = document.querySelectorAll('button');
console.log(btns)
btns[0].addEventListener('click', changeColor);
btns[1].addEventListener('click', stopChanging)

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor(){
interval=setInterval(()=>{mainCol.style.backgroundColor=colors[randomIntegerFromInterval(0, colors.length)];
},1000)
btns[0].disabled=true
}

function stopChanging(){
clearInterval(interval) 
btns[0].disabled=false
}
