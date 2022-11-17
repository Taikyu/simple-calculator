// for button functionality

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');


buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear'){
            display.innerText= '';
        } else if(item.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText=string.substr(0, string.length - 1);
        } else if (item.id == 'equal' && display.innerText != '' ){
           display.innerText=eval(display.innerText) ;
        } else if (item.id == 'equal' && display.innerText == '' ){
            display.innerText='Field is empty!'
            setTimeout(()=>(display.innerText=''), 2000);
        } else{
            display.innerText+=item.id;
        }
    }
})


// for theme toggle functionality

const toggleBtn=document.querySelector('.theme-toggler');
const toggleIcon=document.querySelector('.toggler-icon');
const theme=document.querySelector('.calculator');

let isDark = true;
toggleBtn.onclick=()=>{
    theme.classList.toggle('dark');
    toggleBtn.classList.toggle('active');
    isDark=!isDark;
}