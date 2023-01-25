// Seleciona todos os botões com a classe "toggle"
var toggleButtons = document.querySelectorAll(".toggle");

// Adiciona um evento de clique a cada botão
for (var i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener("click", function() {
    // Seleciona o elemento com o ID especificado no atributo "data-toggle" do botão
    var toggleElement = document.getElementById(this.getAttribute("data-toggle"));
    // Alterna a classe "hidden" do elemento selecionado
    toggleElement.classList.toggle("hidden");
  });
}
