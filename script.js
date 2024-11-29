document.getElementById('btn').addEventListener('click', function () {
    const elemento = document.getElementById('elemento');
    
    // Verifica a cor atual e alterna
    if (elemento.style.backgroundColor === 'rgb(201, 0, 0)') { // Cor #C90000
      elemento.style.backgroundColor = '#7106B6'; // Volta para #7106B6
    } else {
      elemento.style.backgroundColor = '#C90000'; // Altera para #C90000
    }
  });