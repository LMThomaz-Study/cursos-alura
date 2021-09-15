import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCarrinhoContext } from 'common/context/Carrinho';
import { usePagamentoContext } from 'common/context/Pagamento';
import Produto from 'components/Produto';
import { useState } from 'react';
import { useHistory } from 'react-router';
import {
  Container,
  PagamentoContainer,
  TotalContainer,
  Voltar,
} from './styles';

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { carrinho, valorTotal } = useCarrinhoContext();
  const { formaPagamento, tiposPagamento, mudarFormaPagamento } =
    usePagamentoContext();

  const history = useHistory();

  return (
    <Container>
      <Voltar onClick={() => history.goBack()} />
      <h2>Carrinho</h2>
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={formaPagamento.id}
          onChange={(e) => {
            mudarFormaPagamento(e.target.value);
          }}>
          {tiposPagamento.map((tipo) => (
            <MenuItem key={tipo.id} value={tipo.id}>
              {tipo.nome}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      {carrinho.map((item) => (
        <Produto {...item} key={item.id} />
      ))}
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ {valorTotal.toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ </span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ </span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color='primary'
        variant='contained'>
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}>
        <MuiAlert onClose={() => setOpenSnackbar(false)} severity='success'>
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
}

export default Carrinho;
