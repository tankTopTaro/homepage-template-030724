import { Typography } from "@mui/material";
import CustomBox from "../components/CustomBox";

export default function FoldSection() {
  return (
    <CustomBox
      flexDirection= 'column'
      gap={4}
      minHeight='30vh'
      sx={{
        background: '#faf0e6',
        paddingBottom: '2em'
      }}
    >
      <Typography
        variant='h5'
        textAlign='center'
        mt={4}
        gutterBottom
        sx={{
          width: '50vw'
        }}
      >
        ENGAGING SUBHEADING. ADDRESS YOUR VISITORS PROBLEMS.
      </Typography>
      <Typography
        textAlign='center'
        sx={{
          width: '50vw'
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure, culpa, magnam officia tempora iste perferendis est consequatur adipisci odio tempore temporibus omnis esse voluptates eum nesciunt! Neque, perferendis doloribus!
      </Typography>
    </CustomBox>
  )
}
