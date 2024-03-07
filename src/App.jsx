import { AppBar, Box, Button, Card, CardContent, CardMedia, IconButton, Toolbar, Typography } from '@mui/material'
import { FlutterDash } from '@mui/icons-material'

const pages = [ 'Navigation-1', 'Navigation-2', 'Navigation-3', 'Navigation-4' ]

export default function App() {

  return (
    <>
    {/* / Header / */}
    <Box className='header'>
      <AppBar 
        position='sticky'
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

    {/* / Hero Section / */}
    <Box 
      className='hero' 
      display='flex'
      flexDirection='column'
      gap={4}
      justifyContent='center'
      alignItems='center'
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
    </Box>

    {/* / Fold / */}
    <Box
      className='fold'
      display='flex'
      flexDirection='column'
      gap={4}
      justifyContent='center'
      alignItems='center'
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
    </Box>

    {/* / Introduction / */}
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
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
    </Box>

    {/* / Offerings Directory aka Visual Menu / */}
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
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
    </Box>

    {/* / Social Proof / */}
    <Box 
      display='flex'
      alignItems='center'
      justifyContent='center'
      bgcolor='#eed9c4'
      minHeight='30vh'
    >
      <Box
        bgcolor='#faf0e6'
        width='80vw'
        height='200px'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Typography
          variant='h6'
          textAlign='center'
        > 
          SOCIAL PROOF</Typography>
        <Typography textAlign='center'>Testimonies or client/customer reviews</Typography>
      </Box>
    </Box>

    {/* / Extras / */}
    <Box 
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      bgcolor='#eed9c4'
      minHeight='30vh'
    >
      <Typography variant='h6' textAlign='center'>EXTRAS</Typography>
      <Typography textAlign='center'>lead magnet, newsletter, blog posts etc.</Typography>
    </Box>

    {/* / Footer / */}
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
    </>
  )
}

