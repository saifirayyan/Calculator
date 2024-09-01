const keys = document.querySelectorAll('.key');
const display = document.querySelector('.screen');
let string = '';

keys.forEach((key)=>{
    key.addEventListener('click',(e)=>{
        if(!(e.target.classList.contains('operator') && string.charAt(string.length-1)===e.target.value) && !(!string && (e.target.value==='*' || e.target.value==='/'))){
            
            if(e.target.innerHTML==='='){
                try{
                    const ans = eval(string)
                    string = ''+ans;
                    display.value = string;
                }catch(error){
                    display.value = 'E';
                    string = '';
                }
            }else if(e.target.innerHTML==='DEL'){
                string = string.substring(0,string.length-1);
                if(!string) display.value = '0';
                else display.value = string;
            }else if(e.target.value==='.' && !string){
                string = '0'+e.target.value;
                display.value = string;
            }else if(e.target.innerHTML==='RESET'){
                string = '';
                display.value = '0';
            }else{
                string += e.target.value;
                display.value = string;
            }
        }
    })
})