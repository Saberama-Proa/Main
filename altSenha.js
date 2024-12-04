document.addEventListener("DOMContentLoaded", () => {
    const novaSenha = document.getElementById("nova-senha");
    const confirmarSenha = document.getElementById("confirmar-senha");
    const form = document.getElementById("senha-form");
  
    // Requisitos
    const requisitos = {
      length: document.getElementById("length"),
      uppercase: document.getElementById("uppercase"),
      number: document.getElementById("number"),
      special: document.getElementById("special"),
      match: document.getElementById("match"),
    };
  
    // Atualiza o estado do requisito (ícone e classe)
    function atualizarRequisito(requisito, valido) {
      const icon = requisito.querySelector(".icon");
      if (valido) {
        requisito.classList.add("valid");
        icon.textContent = "✔️";
      } else {
        requisito.classList.remove("valid");
        icon.textContent = "❌";
      }
    }
  
    // Validação em tempo real
    novaSenha.addEventListener("input", () => {
      const valor = novaSenha.value;
  
      // Tamanho mínimo
      atualizarRequisito(requisitos.length, valor.length >= 5);
  
      // Letra maiúscula ou minúscula
      atualizarRequisito(requisitos.uppercase, /[a-zA-Z]/.test(valor)); // Valida qualquer letra (maiúscula ou minúscula)
  
      // Número
      atualizarRequisito(requisitos.number, /\d/.test(valor));
  
      // Caractere especial (somente caracteres especiais)
      atualizarRequisito(requisitos.special, /[^a-zA-Z0-9]/.test(valor)); // Valida qualquer caractere que não seja letra ou número
    });
  
    // Validação de correspondência
    confirmarSenha.addEventListener("input", () => {
      const coincidem = novaSenha.value === confirmarSenha.value;
      atualizarRequisito(requisitos.match, coincidem);
    });
  
    // Bloqueia o envio do formulário se as validações falharem
    form.addEventListener("submit", (event) => {
      const senhaValida = novaSenha.value.length >= 5 &&
                          /[a-zA-Z]/.test(novaSenha.value) && // Verifica se há pelo menos uma letra
                          /\d/.test(novaSenha.value) &&
                          /[^a-zA-Z0-9]/.test(novaSenha.value); // Verifica se há pelo menos um caractere especial
      const coincidem = novaSenha.value === confirmarSenha.value;
  
      if (!senhaValida || !coincidem) {
        event.preventDefault();
        alert("Por favor, corrija os erros antes de enviar.");
      }
    });
  });
  