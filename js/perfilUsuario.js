
window.onload = function () { // Funcion al cargarse la pagina
    const menu = document.getElementById('menu'); 
    if (menu) {
        const link = document.createElement('a');
        if (localStorage.getItem('isLoggedIn') === 'true') { // verifica si el usuario esta logeado
            const currentPage = window.location.pathname.split('/').pop();
            const linkPath = currentPage === 'index.html' ? 'pages/perfilUsuario.html' : 'perfilUsuario.html'; // Diferencia entre cual es la ruta segun la pagina actual (esto es para que no genere un error al estar en index.html)
            link.href = linkPath;
        } else {
            link.href = 'index.html';
        }
        link.textContent = 'Mi Perfil'; // Crea nuevo elemento en el menu llamado "Mi perfil", el cual solo sera accesible si el usuario esta logeado.
        const listItem = document.createElement('li');
        listItem.appendChild(link);
        menu.appendChild(listItem);
        // Aplicar los mismos estilos CSS que se utilizan para los otros elementos del menú
        listItem.classList.add('nav-item'); // Agrega la clase 'nav-item' para aplicar los estilos CSS
        link.classList.add('nav-link'); // Agrega la clase 'nav-link' para aplicar los estilos CSS
    } else {
        console.error("No se encontró el elemento con el id 'menu'"); // imprime que no encuentra menu
    }

    // Obtener los valores de 'username' desde el localStorage
    const username = localStorage.getItem('username'); // Obtengo los valores del localStorage de username
    document.getElementById('h1-pu').textContent = `Bienvenido/a, ${username}!`; // Modifica el mensaje de "Bienvenido/a" en la pagina "Mi Perfil" segun las nuevas credenciales almacenadas en localStorage

    // Obtener los valores de 'notas' desde el localStorage
    const notasData = localStorage.getItem('notas'); // Obtengo los valores de notas a partir del localStorage
    const notas = notasData ? JSON.parse(notasData) : {}; // Parseo el valor de notasData a un objeto de JavaScript o un objeto vacío si notasData es nulo o undefined
    console.log(notas); // Muestro el objeto 'notas' en la consola

    if (notas) {
        Object.keys(notas).forEach((key) => {
          console.log(notas[key]); // imprime los valores de notas.
        });
      } else {
        console.log('Error: notas object is not defined or empty');
      }

};


