document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".comprar");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Produto adicionado ao carrinho!");
        });
    });
});
