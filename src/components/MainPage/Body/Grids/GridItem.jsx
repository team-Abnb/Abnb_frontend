import { Card, CardMedia, Grid } from "@mui/material"
import { AspectRatio } from '@mui/joy';
import LikeButton from './LikeButton';
import Typography from "@mui/material/Typography";


function GridItem({item}) {

  return (
    <Grid item xxs={60} xs = {30} sm={20} md={15} lg={12} xl={10}>
    <Card sx={{mb: '16px', boxShadow: 'none' }}>
      <AspectRatio ratio='20/19'>
      <CardMedia
        sx={{ borderRadius: '12px'}}
        component='img'
        image={item.thumbnailImg}
        alt='room img'
      />
      <LikeButton/>
      </AspectRatio>
      <Typography variant="bod2"
      sx={{
        fontSize : '15px',
        wordWrap : 'break-word',
        overflow : 'hidden',
        lineHeight : '1.2em',
        WebkitLineClamp : 1,
        }}>
        {item.title}
      </Typography>
      <Typography variant='body2'>
        {item.address}
      </Typography>
      <Typography variant='body2'>
        {`₩${item.price.toLocaleString()} /박`}
      </Typography>
    </Card>
  </Grid>
  )
}
export default GridItem