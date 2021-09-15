import { createContext, useContext, useEffect, useState } from 'react';

export const CarrinhoContext = createContext({});
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeTotal, setQuantidadeTotal] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidadeTotal,
        setQuantidadeTotal,
        valorTotal,
        setValorTotal,
      }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinhoContext = () => {
  const {
    carrinho,
    setCarrinho,
    quantidadeTotal,
    setQuantidadeTotal,
    setValorTotal,
    valorTotal,
  } = useContext(CarrinhoContext);

  function mudarQuantidade(id, quantidade) {
    return carrinho.map((item) => {
      if (item.id === id) {
        item.unidade += quantidade;
      }

      return item;
    });
  }

  function adicionarProduto(novoProduto) {
    const existeProduto = carrinho.some((item) => item.id === novoProduto.id);

    if (!existeProduto) {
      novoProduto.unidade = 1;

      return setCarrinho((carrinhoAnterior) => [
        ...carrinhoAnterior,
        novoProduto,
      ]);
    }

    setCarrinho(mudarQuantidade(novoProduto.id, 1));
  }

  function removerProduto(id) {
    const produto = carrinho.find((item) => item.id === id);
    const lastItem = produto.unidade === 1;
    if (lastItem)
      return setCarrinho((carrinhoAnterior) =>
        carrinhoAnterior.filter((item) => item.id !== id),
      );

    setCarrinho(mudarQuantidade(id, -1));
  }

  useEffect(() => {
    const { novoTotal, novaQuantidade } = carrinho.reduce(
      (contador, item) => {
        return {
          novaQuantidade: contador.novaQuantidade + item.unidade,
          novoTotal: contador.novoTotal + item.unidade * item.valor,
        };
      },
      { novaQuantidade: 0, novoTotal: 0 },
    );

    setValorTotal(novoTotal);
    setQuantidadeTotal(novaQuantidade);
  }, [carrinho, setQuantidadeTotal, setValorTotal]);

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    quantidadeTotal,
    valorTotal,
  };
};
