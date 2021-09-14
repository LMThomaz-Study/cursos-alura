import { createContext, useContext, useState } from 'react';

export const CarrinhoContext = createContext({});
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinhoContext = () => {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

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

  return { carrinho, setCarrinho, adicionarProduto, removerProduto };
};
