/* eslint-disable react/prop-types */
import { FlutterDash } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";

export default function Header({ pages }) {
  return (
    <Box className='header'>
      <AppBar 
        position='static'
        sx={{
          background: '#d9b99b'
        }}
      >
        <Toolbar>
          <IconButton 
            color='inherit'
            size='large' 
            edge='start' 
            sx={{ mr: 2 }}
          >
            <FlutterDash fontSize='large'/>
          </IconButton>
          <Typography 
            variant='h6' 
            component='div'
            sx={{ flexGrow: 1, letterSpacing: '.3rem' }}
          >
            LOGO
          </Typography>
          {pages.map((page) => (
            <Button key={page} color='inherit'>{page}</Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
