import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { navData } from '../navData';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import logo from '../../../assets/images/logo.jpg'


export default function TemporaryDrawer({ pathname }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, backgroundColor: '#faffff', height: '100%', position: 'relative' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <div className="mobile__title" style={{ fontWeight: 'bold', fontSize: '45px', textAlign: 'center', margin: '50px auto 70px auto' }}>
        <img src={logo} alt="" style={{ width: '120px', height: '120px' }} />
        </div>
        <div className="mobile__linksContainer">
            <List>
                <FadeIn delay="90">
                    {navData.map((item, i) => (
                    <Link key={i} to={item.link} style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem 
                            button 
                            style={{ 
                              backgroundColor: item.link === pathname && '#C89704', 
                              color: item.link === pathname && 'white', 
                              borderBottom: '1px solid rgba(187, 182, 182, 0.445)', 
                              borderTop: i === 0 && '1px solid rgba(187, 182, 182, 0.445)' 
                            }}
                        >
                            <ListItemText><strong>{item.name}</strong></ListItemText>
                        </ListItem>
                    </Link>
                    ))}
                </FadeIn>
            </List>
        </div>
    </Box>
  );

  return (
    <div className="mobile__nav">
        <IconButton onClick={toggleDrawer('right', true)}>
            <MenuIcon sx={{ color: '#090909', fontSize: '30px' }} />
        </IconButton>
        <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
        >
            {list('right')}
        </Drawer>
    </div>
  );
}
