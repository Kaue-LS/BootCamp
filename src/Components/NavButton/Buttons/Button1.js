import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu3() {
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
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={'true' ? handleClick : undefined}
        onClick={'true' ? handleClick : undefined}
        ><span style={{color:"#ffffff"}}>
        PROMOÇÕES
        </span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>CARRO</MenuItem>
        <MenuItem>BICICLETA</MenuItem>
        <MenuItem>ORIGINAIS DE FÁBRICA</MenuItem>
        <MenuItem>AGRÍCOLA</MenuItem>
        <MenuItem>MOTO</MenuItem>
        <MenuItem>QUADRICICLO</MenuItem>
        <MenuItem>CAMINHÃO E ÔNIBUS</MenuItem>
      </Menu>
    </div>
  );
};