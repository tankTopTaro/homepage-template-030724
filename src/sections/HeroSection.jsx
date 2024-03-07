import { Button, Typography } from "@mui/material";
import CustomBox from "../components/CustomBox";

export default function HeroSection() {
  return (
    <CustomBox
      flexDirection= 'column'
      gap={4}
      minHeight='100vh'
      sx={{ 
        background: 'linear-gradient(-15deg, rgba(217,185,155,1) 0%, rgba(238,217,196,1) 50%, rgba(250,240,230,1) 100%)', 
      }}
    >
      <Typography 
        variant='h3' 
        textAlign='center'
        sx={{
          width: '50vw'
        }}
      >
        COMPELLING HEADLINE HERE ABOVE THE FOLD
      </Typography>
      <Typography
        variant='h6'
        textAlign='center'
        fontWeight={400}
        sx={{
          width: '50vw'
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </Typography>
      <Button
        variant='outlined'
        size='large'
        color='inherit'
        sx={{
          ':hover': {
            background: '#faf0e6'
          }
        }}
      >
        CTA BUTTON
      </Button>
    </CustomBox>
  )
}
