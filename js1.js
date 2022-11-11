const email= document.querySelector('#email');
const password=document.querySelector('#password');
const register=document.querySelector('#register');
const error=document.querySelector('.error');
const peepbutton=document.querySelector('.peepbutton')


register.addEventListener('click', function (){
    if (email.value!='' && password.value!=''){
        if(password.value.length<6){
    error.innerHTML='password should be more than 6 characters'
    }
    else{
        error.innerHTML=''
        register.value='loading...'
        register.value='Registered'
    }
}else{
    error.innerHTML='fill form properly and try again'
}
})

peepbutton,addEventListener('click', ()=>{
    if(peepbutton.innerText=='peep'){
//     password.setAttribute('type', 'text')
//     peepbutton.innerText='Hide'
// } else 
// {
//     password.setAttribute('type', 'password')
//     peepbutton.innerText='peep'
}

password.setAttribute('type', peepbutton.innerText == 'peep' ? 'text' : 'password')
peepbutton.innerText= peepbutton.innerText == 'peep' ? 'Hide' : 'peep'
})
