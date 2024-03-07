/* eslint-disable react/prop-types */

import { Box } from "@mui/material";

export default function CustomBox({ children, ...props }) {

  return (
    <Box 
        {...props}  
        display= 'flex'
        justifyContent= 'center'
        alignItems= 'center'
    >
        { children }
    </Box>
  )
}
