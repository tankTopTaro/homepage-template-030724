import { Typography } from "@mui/material";
import CustomBox from "../components/CustomBox";

export default function ExtrasSection() {
  return (
    <CustomBox
      flexDirection='column'
      bgcolor='#eed9c4'
      minHeight='30vh'
    >
      <Typography variant='h6' textAlign='center'>EXTRAS</Typography>
      <Typography textAlign='center'>lead magnet, newsletter, blog posts etc.</Typography>
    </CustomBox>
  )
}
