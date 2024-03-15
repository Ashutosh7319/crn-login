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

let butn = document.getElementById('buttn');

butn.addEventListener('click', ()=>
{
    document.getElementById('succ').style.display = 'flex';
}
)
