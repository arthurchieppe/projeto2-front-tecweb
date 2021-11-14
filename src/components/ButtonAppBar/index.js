import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';

// https://mui.com/pt/components/app-bar/

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: " #336A8C"}}>
        <Toolbar sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center'
        }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Box> */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Box  
              component="img"
              sx={{
              height: 60,
              // width: auto,
              margin: 1,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              }}
              alt="Logo"
              src="/weather-icon.png"
              />  
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Weather App
            </Typography>
          </Box>
            <Box sx={{width: 500,
            display: "flex",
            flexDirection: "row",
            }}>

          
            <TextField fullWidth={true} id="filled-basic" label="Type a city..." variant="filled" className="citySearch"/>
            <Button color="inherit">Add</Button>
              </Box>
            {/* </Box> */}
          <Box>
            <Button color="inherit">Login</Button>
            </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
