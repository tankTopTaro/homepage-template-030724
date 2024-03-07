import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import CustomBox from "../components/CustomBox";

export default function IntroSection() {
  return (
    <CustomBox
      minHeight='70vh'
      gap={6}
      sx={{
        background: '#eed9c4'
      }}
    >
      <Card raised sx={{ maxWidth: 350 }}>
        <CardMedia 
          component="img"
          alt='profile'
          height={400}
          image='./src/images/nahida.jpg'
        />
      </Card>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='start'
        alignItems='start'
        gap={4}
        sx={{
          width: '500px'
        }}
      >
        <Typography variant='h6'>
          INTRODUCE YOURSELF
        </Typography>
        <Typography>
          Who you are, what you do. Copy that engages your website visitor and leaves them wanting to know more about you.
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
          LINK TO ABOUT
        </Button>
      </Box>
    </CustomBox>
  )
}
