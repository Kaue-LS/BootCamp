import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu0() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button 
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : 'false'}
        onMouseMoveCapture={handleClick}
        ><span style={{color:"#ffffff"}}>
        ACESSÓRIOS
        </span> 
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onMouseOver={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>ACESSÓRIOS PARA CARRO</MenuItem>
        <MenuItem>ACESSÓRIOS PARA MOTO</MenuItem>
        <MenuItem>ACESSÓRIOS PARA BICICLETA</MenuItem>
        <MenuItem>ACSSÓRIOS PARA CAMINHÃO</MenuItem>
        <MenuItem>LUBRIFICANTES</MenuItem>
      </Menu>
    </div>
  );
};
