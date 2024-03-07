import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import CustomBox from "../components/CustomBox";

export default function VisualMenuSection() {
  return (
    <CustomBox
      gap={4}
      minHeight='60vh'
      bgcolor='#faf0e6'
    >
      <Card raised sx={{ maxWidth: 350 }}>
          <CardMedia 
            component="img"
            alt='profile'
            height={300}
            image='./src/images/visual-1.jpg'
          />
          <CardContent sx={{ background: '#faf0e6' }}>
            <Typography
              gutterBottom
              textAlign='center'
              variant='h5'
            >
              PROJECT-1
            </Typography>
          </CardContent>
      </Card>
      <Card raised sx={{ maxWidth: 350 }}>
          <CardMedia 
            component="img"
            alt='profile'
            height={300}
            image='./src/images/visual-2.jpg'
          />
          <CardContent sx={{ background: '#faf0e6' }}>
            <Typography
              gutterBottom
              textAlign='center'
              variant='h5'
            >
              PROJECT-2
            </Typography>
          </CardContent>
      </Card>
      <Card raised sx={{ maxWidth: 350 }}>
          <CardMedia 
            component="img"
            alt='profile'
            height={300}
            image='./src/images/visual-3.jpg'
          />
          <CardContent sx={{ background: '#faf0e6' }}>
            <Typography
              gutterBottom
              textAlign='center'
              variant='h5'
            >
              PROJECT-3
            </Typography>
          </CardContent>
      </Card>
    </CustomBox>
  )
}
