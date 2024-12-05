// Seleciona o dropdown e adiciona o evento de mudança
const themeSelector = document.getElementById('themeSelector');

// Função para aplicar o tema
function applyTheme(theme) {
  // Limpa qualquer filtro de cor antes de aplicar o novo tema
  document.body.style.filter = ''; // Remove qualquer filtro de cor ativo

  // Verifica o tema e aplica as configurações de cor
  if (theme === 'dark') {
    document.body.style.backgroundColor = '#2D2D2D';
    document.body.style.color = '#FFFFFF'; // Ajuste o texto para o modo escuro
  } else if (theme === 'light') {
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.color = '#000000'; // Ajuste o texto para o modo claro
  } else if (theme === 'daltonic') {
    // Aqui você pode aplicar o filtro de cores para o modo daltonico
    document.body.style.backgroundColor = '#f4f4f4';  // Cor de fundo mais neutra
    document.body.style.color = '#333333';  // Texto com bom contraste

    // Aplica o filtro de cor daltonico (exemplo de contraste para todos os tipos de daltonismo)
    document.body.style.filter = 'grayscale(100%) contrast(100%) brightness(100%)';
  }
}

// Verifica o tema salvo no LocalStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light'; // Padrão: modo claro
  if (themeSelector) {
    themeSelector.value = savedTheme; // Atualiza o seletor de tema, se houver
  }
  applyTheme(savedTheme); // Aplica o tema na página atual
});

// Salva o tema selecionado e aplica as mudanças
if (themeSelector) {
  themeSelector.addEventListener('change', () => {
    const selectedTheme = themeSelector.value;
    localStorage.setItem('theme', selectedTheme); // Salva a escolha do usuário no localStorage
    applyTheme(selectedTheme); // Aplica o tema imediatamente
  });
}
