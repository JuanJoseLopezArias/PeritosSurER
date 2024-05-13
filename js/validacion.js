// La idea de la pagina no es un "Registro" generado por usuarios, sino que se les brinden usuarios y contraseñas a medida que acceden al curso (osea que pagan).
// A partir de esto, se crean los usuarios en este archivo.
// La funcion este archivo js es validar los datos brindados el array "accesoUsuarios".

const accesoUsuarios = [
    {
        usuario: "juliaAl@gmail.com",
        clave: "1234",
        nombre: "Julia",
        notas: {
            analitica1: 2,
            analitica2: 10,
            mercado: 5,
            tipificacion: 8,
            liquidacion: 8,
            produccion: 6,
            almacenamiento:7,
            conservacion: 9
        }  
    },
    {
        usuario: "daniel-ver@hotmail.com",
        clave: "1235",
        nombre: "Daniel"
    },
    {
        usuario: "raquelpascini@gmail.com",
        clave: "1236",
        nombre: "Raquel"
    },
    {
        usuario: "pepe@outlook.com",
        clave: "1237",
        nombre: "José"
    },
    {
        usuario: "nahim@coderhouse.com",
        clave: "1238",
        nombre: "Nahim"
    },
    {
        usuario: "dora@hotmail.com",
        clave: "1239",
        nombre: "Dora"
    }
];

console.log(accesoUsuarios[0]);
console.log(accesoUsuarios[1]);
console.log(accesoUsuarios[2]);
console.log(accesoUsuarios[3]);
console.log(accesoUsuarios[4]);
console.log(accesoUsuarios[5]);
console.log(accesoUsuarios[0].notas.analitica1); // Output: 2
console.log(accesoUsuarios[0].notas.analitica2); // Output: 10
console.log(accesoUsuarios[0].notas.mercado); // Output: 5

function validacion(event) {
    event.preventDefault();
    const user = document.getElementById('login-usuario').value;
    const pw = document.getElementById('login-contrasenia').value;
    const redirect = "perfilUsuario.html";
    let verificado = false;
    let val;

    for (let i = 0; i < accesoUsuarios.length; i++) { // Bucle para verificar credenciales
        val = accesoUsuarios[i];
        if (val.usuario === user && val.clave === pw) {
            verificado = true;
            break;
        }
    }

    if (verificado) { // Si se verifica el usuario, guarda los datos en localStorage y redirige a "perfilUsuario.html"
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', val.nombre);
        localStorage.setItem('notas', JSON.stringify(val.notas));
        localStorage.setItem('user', user);
        localStorage.setItem('pw', pw);

        window.location.href = redirect;
    } else {
        document.getElementById('mensajeError').innerHTML = "Credenciales incorrectas"; // Si las credenciales son incorrectas arroja un mensaje de "Credenciales incorrectas"
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', validacion);
});



console.log(menu);














