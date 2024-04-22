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


function validacion() {
    const user = document.getElementById('login-usuario').value;
    const pw = document.getElementById('login-contrasenia').value;
    let verificado = false;   
    let i = 0
    let val = accesoUsuarios[i]
    for (i; i < accesoUsuarios.length; i++) {
        val = accesoUsuarios[i]
        if (val.usuario === user && val.clave === pw) {
            verificado = true;
            break
        }
    } if (verificado) {
        alert("Bienvenido " + val.nombre);
        
    } else {
        alert ("Datos incorrectos");
    }
    
}

