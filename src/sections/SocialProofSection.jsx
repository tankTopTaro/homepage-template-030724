import { Typography } from "@mui/material";
import CustomBox from "../components/CustomBox";

export default function SocialProofSection() {
  return (
    <CustomBox
        bgcolor='#eed9c4'
        minHeight='30vh'
    >
    <CustomBox
      bgcolor='#faf0e6'
      width='80vw'
      height='200px'
      flexDirection='column'
    >
      <Typography
        variant='h6'
        textAlign='center'
      > 
        SOCIAL PROOF</Typography>
      <Typography textAlign='center'>Testimonies or client/customer reviews</Typography>
    </CustomBox>
  </CustomBox>
  )
}
