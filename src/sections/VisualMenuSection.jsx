import { Card, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import CustomBox from "../components/CustomBox";

const projects = ['Project-1', 'Project-2', 'Project-3']

export default function VisualMenuSection() {
  return (
    <CustomBox
      gap={4}
      minHeight='60vh'
      bgcolor='#faf0e6'
    >
      {projects.map((project) => (
        <Card key={project} raised sx={{ maxWidth: 350 }}>
          {/* <CardMedia 
            component="img"
            alt='profile'
            height={300}
            image='./src/images/visual-1.jpg'
          /> */}
          <Skeleton 
            sx={{ height: 300, width: 350 }} 
            animation="wave" 
            variant="rectangular" 
          />
          <CardContent sx={{ background: '#faf0e6' }}>
            <Typography
              gutterBottom
              textAlign='center'
              variant='h5'
            >
              {project}
            </Typography>
          </CardContent>
      </Card>
      ))}
    </CustomBox>
  )
}
