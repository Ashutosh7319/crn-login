let eye = document.getElementById('pami');
let password = document.getElementById('pastword');
eye.addEventListener('click', ()=>
{
    if(password.type == 'password')
    {
        password.type = 'text';       
    }
    else
    {
        password.type = 'password';
    }
    
})