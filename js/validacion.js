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
        usuario: "martinramirez1@hotmail.com",
        clave: "1235",
        nombre: "Martin",
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
        usuario: "ceciliagomez@gmail.com",
        clave: "1236",
        nombre: "Cecilia",
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
        usuario: "pepeloar@outlook.com",
        clave: "1237",
        nombre: "José",
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
        usuario: "mbelenacc@hotmail.com",
        clave: "1238",
        nombre: "Belén",
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
        usuario: "lorenzogarcia@hotmail.com",
        clave: "1239",
        nombre: "Lorenzo",
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
    }
];

function validacion(event) {
    event.preventDefault();
    const user = document.getElementById('login-usuario').value;
    const pw = document.getElementById('login-contrasenia').value;
    const redirect = "perfilUsuario.html";
    let verificado = false;
    let val;

    for (let i = 0; i < accesoUsuarios.length; i++) {
        val = accesoUsuarios[i];
        if (val.usuario === user && val.clave === pw) {
            verificado = true;
            break;
        }
    }

    if (verificado) {
        // If credentials are valid, store data in localStorage and redirect
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', val.nombre);
        localStorage.setItem('notas', JSON.stringify(val.notas));
        localStorage.setItem('user', user);
        localStorage.setItem('pw', pw);
        Swal.fire({
            icon: "success",
            title: "Credenciales correctas!",
            width: 300,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = redirect;
            } 
        });
    } else {
        // Si las credenciales son incorrectas muestra un mensaje de error utilizando sweet alert
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Credenciales incorrectas!",
            width: 300,
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', validacion);
});
