
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

  const notas = JSON.parse(localStorage.getItem('notas'));
  console.log(notas);

  // Bucle de las propiedades en el objeto "notas"
  for (let key in notas) {
    // Encuentra el div con la datakey correspondiente
    const divElement = document.querySelector(`[data-key="${key}"]`);

    // Si existe el div cambia el texto por lo brindado por el objeto notas
    if (divElement) {
      divElement.textContent = notas[key];
      // Cambia el color segun la nota, verde aprobado, rojo desaprobado
      if (notas[key] >= 7) {
        divElement.style.color = 'green';
      } else if (notas[key] <= 6) {
        divElement.style.color = 'red';
      }
    }
  }

  // Bucle que recorre los valores numericos de las notas brindadas por las propiedades del objeto 'notas' para determinar si una materia esta aprobada o no.
  let aprobadas = 0;
  for (let key in notas) {
    if (notas[key] >= 7) {
      aprobadas++;
    }
  }

  // Actualiza el contenido de p con class "notas-pu", segun la cantidad de materias aprobadas
  const pElement = document.querySelector('.notas-pu');
  if (pElement) {
    pElement.textContent = `${aprobadas}/${Object.keys(notas).length}`;
  }
};


