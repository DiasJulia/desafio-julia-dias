class CaixaDaLanchonete {
    constructor() {
        this.cardapio = {
            "cafe": { descricao: "Café", valor: 3.00 },
            "chantily": { descricao: "Chantily (extra do Café)", valor: 1.50 },
            "suco": { descricao: "Suco Natural", valor: 6.20 },
            "sanduiche": { descricao: "Sanduíche", valor: 6.50 },
            "queijo": { descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
            "salgado": { descricao: "Salgado", valor: 7.25 },
            "combo1": { descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
            "combo2": { descricao: "1 Café e 1 Sanduíche", valor: 7.50 }
        };
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        let total = 0.0;

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        for(const itemInfo of itens){
            const item = itemInfo.split(",");

            if(item[1] <= 0){
                return "Quantidade inválida!";
            }

            if (item[0] in this.cardapio) {
                const valorItem = this.cardapio[item[0]].valor;
                total += valorItem * item[1];
            } else {
                return "Item inválido!";
            }
        }

        if(metodoDePagamento === "dinheiro"){
            total = total * 0.95;
        } else if(metodoDePagamento === "credito"){
            total = total * 1.03;
        } else if(metodoDePagamento !== "debito"){
            return "Forma de pagamento inválida!";
        }

        return `R$ ${total.toFixed(2).replace(".", ",")}`;
    }

}

export { CaixaDaLanchonete };
