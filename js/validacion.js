// La idea de la pagina no es un "Registro" generado por usuarios, sino que se les brinden usuarios y contraseñas a medida que acceden al curso (osea que pagan).
// A partir de esto, se crean los usuarios en este archivo.
// La funcion este archivo js es validar los datos brindados el array "accesoUsuarios".

const accesoUsuarios = [
    {
        usuario: "juliaAl@gmail.com",
        clave: "1234",
        nombre: "Julia"
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


function validacion(event) {
    event.preventDefault();
    const user = document.getElementById('login-usuario').value;
    const pw = document.getElementById('login-contrasenia').value;
    const redirect = "perfilUsuario.html";
    let verificado = false;
    let i = 0;
    let val = accesoUsuarios[i];
    for (i; i < accesoUsuarios.length; i++) {
        val = accesoUsuarios[i];
        if (val.usuario === user && val.clave === pw) {
            verificado = true;
            break;
        }
    }
    if (verificado) {
        const menu = document.getElementById('menu');
        if (menu) {
            console.log("Menu element found:", menu);
        
            const nuevoElemento = document.createElement('li');
            console.log("New list item created:", nuevoElemento);
        
            const nuevoEnlace = document.createElement('a');
            console.log("New link created:", nuevoEnlace);
        
            nuevoEnlace.href = redirect;
            nuevoEnlace.textContent = "Mi Perfil";
            nuevoElemento.appendChild(nuevoEnlace);
            console.log("New link appended to list item:", nuevoElemento);
        
            menu.appendChild(nuevoElemento);
            console.log("New list item appended to menu:", menu);
            
            localStorage.setItem('enlaceMiPerfil', 'true');
        } else {
            console.error("No se encontró el elemento con el id 'menu'");
        }

        // Guardar datos del usuario en localStorage
        localStorage.setItem('usuario', user);
        localStorage.setItem('clave', pw);
        localStorage.setItem('nombreUsuario', val.nombre);

        // Modificar el contenido del elemento <h1> después de que el DOM esté cargado
        document.addEventListener('DOMContentLoaded', function () {
            const h1Element = document.getElementById('h1-pu');
            if (h1Element) {
                const nombreUsuario = localStorage.getItem('nombreUsuario');
                h1Element.textContent = `Bienvenido/a, ${nombreUsuario}`;
            } else {
                console.error("No se encontró el elemento con el ID 'h1-pu'");
            }

            
        });
    } else {
        document.getElementById('mensajeError').innerHTML = "Credenciales incorrectas";
    }

    // Redirigir a perfilUsuario.html
    history.pushState(null, null, redirect);
}

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', validacion);
});



console.log(menu);














