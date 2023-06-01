function showAlert() { alert("hola mundo,alerta de javascript");}
//obtenemos el boton por su id//
let boton= document.getElementById("miBoton");
//añadimos un oyente de eventos que escuche el evento "click"//
boton.addEventListener("click",function(){
    alert("presionaste el boton!!");
})

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
event.preventDefault();
validateForm();
})
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
    }
    function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
    } else {
    alert('Correo electrónico enviado correctamente.');
    }
    }
    