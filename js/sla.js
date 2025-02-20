document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".comprar");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Produto adicionado ao carrinho!");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const carrinho = [];
    const botoesCompra = document.querySelectorAll(".produto button");
    
    botoesCompra.forEach((botao, index) => {
        botao.addEventListener("click", () => {
            const produtoNome = botao.parentElement.querySelector("p").innerText;
            adicionarAoCarrinho(produtoNome);
        });
    });
    
    function adicionarAoCarrinho(produto) {
        carrinho.push(produto);
        alert(`${produto} adicionado ao carrinho!`);
        console.log("Carrinho:", carrinho);
    }
});
