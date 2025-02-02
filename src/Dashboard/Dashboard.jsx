import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Githubfinder from './Githubfinder';
 
import Card from './Card';
import Carddetails from './Carddetails';
 
import User from './User';
import Userdetails from './Userdetails';
 

const drawerWidth = 240;
const pages = [
  {
    name: "Github",
    icon: <MailIcon />,
    route: "Githubfinder"
  },
  {
    name: "Users",
    icon: <MailIcon />,
    route: "User"
  },
  {
    name: "Card",
    icon: <MailIcon />,
    route: "Card"
  },
];
const styles = {
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none', 
    padding: '10px 20px', 
    textAlign: 'center', 
    textDecoration: 'none', 
    display: 'inline-block',
    fontSize: '16px', 
    margin: '10px',
    cursor: 'pointer', 
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  }
};


export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {pages.map((obj, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => navigate(`/${obj.route}`)}>
                <ListItemIcon>
                  {obj.icon}
                </ListItemIcon>
                <ListItemText primary={obj.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Routes>
  <Route 
    path="/" 
    element={
        <div style={{ marginTop: 100, textAlign: 'center' }}>
        <button 
          onClick={() => navigate("/Githubfinder")} 
          style={{ width: '200px', padding: '10px', fontSize: '16px', cursor: 'pointer', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: 'white' }}
        >
          Go to Github Finder
        </button> 
        <br/>
        <button 
          onClick={() => navigate("/User")} 
          style={{ width: '200px', padding: '10px', fontSize: '16px', cursor: 'pointer', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#28a745', color: 'white' }}
        >
          Go to User
        </button> 
        <br/>
        <button 
          onClick={() => navigate("/Card")} 
          style={{ width: '200px', padding: '10px', fontSize: '16px', cursor: 'pointer', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#dc3545', color: 'white' }}
        >
          Go to Card
        </button>
      </div>
      
    }
  />
</Routes>

      <Routes>
        <Route path='/Githubfinder' element={<Githubfinder />} />
        <Route path='/User' element={<User />} />
        <Route path='/Users/:id' element={<Userdetails />} />

        <Route path='/Card' element={<Card />} />
        <Route path='/products/:id' element={<Carddetails/>}      />
    

      </Routes>
    </Box>
  );
}