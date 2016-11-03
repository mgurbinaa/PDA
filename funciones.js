function registrar(){
    user = document.getElementById('usuario').value;
    mail = document.getElementById('correo').value;
    pass = document.getElementById('contra').value;
    
    if(!localStorage.getItem('contador')){
        localStorage.setItem('contador', 0);
    }
    
    contador = localStorage.getItem('contador');
    console.log(contador);
    
    localStorage.setItem('user'+contador, user);
    localStorage.setItem('mail'+contador, mail);
    localStorage.setItem('pass'+contador, pass);
    
    contador++;
    
    localStorage.setItem('contador', contador);
    alert("Registrado exitosamente");
    window.location.assign('indets.html');
}

function verificar(){
    var correo = document.getElementById('mail').value;
    var psswrd = document.getElementById('pass').value;
    var user = localStorage.getItem('mail');
    var pass = localStorage.getItem('pass');
    
    if(correo==user && psswrd==pass){
        window.location.assign('principal.html');
    }
    else{
        alert("Usuario y/o contraseña incorrectos");
    }
}