import { FlutterDash } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";

export default function FooterSection() {
  return (
    <Box
        display='flex'
        alignItems='center'
        justifyContent='space-around'
        minHeight='30vh'
        bgcolor='#d9b99b'
    >
    <Box
      display='flex'
      flexDirection='column'
    >
      <Button color='inherit' size='large'>Quick Link</Button>
      <Button color='inherit' size='large'>Quick Link</Button>
      <Button color='inherit' size='large'>Quick Link</Button>
    </Box>
    <IconButton  
      color='inherit'
      edge='start' 
    >
      <FlutterDash sx={{ fontSize: '100px' }}/>
    </IconButton>
    <Box
      display='flex'
      flexDirection='column'
    >
      <Button color='inherit' size='large'>Social Media</Button>
      <Button color='inherit' size='large'>Contact</Button>
      <Button color='inherit' size='large'>Location</Button>
    </Box>
  </Box>
  )
}
