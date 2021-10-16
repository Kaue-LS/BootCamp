import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton'
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import * as S from './styled'
export default function CartIcon(props){
    return(
        <S.IconCart>
        <Link to='/cart'>
  <IconButton  aria-label="cart">
        <Badge badgeContent={props.quant} color="primary" >
          <ShoppingCartOutlined fontSize='large' style={{color:'white'}}/>
        </Badge>
      </IconButton>
      </Link>
      </S.IconCart>
    )
}