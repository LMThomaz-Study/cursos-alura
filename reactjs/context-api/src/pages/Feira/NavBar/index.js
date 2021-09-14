import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { useCarrinhoContext } from 'common/context/Carrinho';
import { useHistory } from 'react-router';
import { Nav } from './styles';

export default function NavBar() {
  const { quantidadeTotal } = useCarrinhoContext();
  const history = useHistory();

  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={!quantidadeTotal}
        onClick={() => history.push('/carrinho')}>
        <Badge color='primary' badgeContent={quantidadeTotal}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  );
}
