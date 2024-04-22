// La idea de la pagina no es un "Registro" generado por usuarios, sino que se les brinden usuarios y contraseñas a medida que acceden al curso (osea que pagan).
// A partir de esto, se crean los usuarios en este archivo.
// La funcion este archivo js es validar los datos brindados el array "accesoUsuarios".

let accesoUsuarios = [
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

function validacion() {
    let user = document.getElementById('login-usuario').value;
    let pw = document.getElementById('login-contrasenia').value;
    let i = 0;
    let verificado = false;
    
    for (let val = accesoUsuarios[i]; i < accesoUsuarios.length; i++) {
        if (val.usuario[i] == user && val.clave[i] == pw) {
            verificado = true;
        } 
    }
    if (verificado === true) {
        alert("Bienvenido " + val.nombre);
    } else {
        alert ("Datos incorrectos");
    }
}

