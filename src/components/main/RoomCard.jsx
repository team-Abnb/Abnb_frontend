import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AspectRatio } from '@mui/joy';
import { Grid } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import LikeButton from './card/LikeButton';
import { addLike, deleteLike } from '../../redux/modules/roomSlice';

const styles = {
    cardcontent: {
        padding: 0,
        '&:last-child': {
            paddingBottom: 0,
        },
    },
};

function RoomCard({ room, locationHandler }) {
    const rooms = useSelector(state => state.room.rooms);
    const likeCheck = rooms.filter(v => v.id === room.id)[0].likeCheck;
    const dispatch = useDispatch();
    function like() {
        dispatch(addLike(room.id));
    }
    function disLike() {
        dispatch(deleteLike(room.id));
    }
    return (
        <Card
            sx={{
                cursor: 'pointer',
                border: 'none',
                boxShadow: 'none',
                mb: '16px',
            }}
            onClick={() => locationHandler(room.id)}
        >
            <AspectRatio sx={{ mb: '12px' }} ratio="20/19">
                <CardMedia sx={{ borderRadius: '12px' }} component="img" image={room.imageList[0]} alt="room img" />
                <LikeButton onClick={room.likeCheck ? disLike : like} likeCheck={likeCheck} />
            </AspectRatio>
            <AspectRatio sx={{ p: 0 }} ratio="3/1">
                <Grid container spacing={0} direction="row">
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 1 /* 라인수 */,
                                WebkitBoxOrient: 'vertical',
                                wordWrap: 'break-word',
                                lineHeight: '1.2em',
                                height: '1.2em',
                                fontSize: '15px',
                            }}
                            variant="body2"
                            component="div"
                        >
                            {room.address}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 1 /* 라인수 */,
                                WebkitBoxOrient: 'vertical',
                                wordWrap: 'break-word',
                                lineHeight: '1.2em',
                                height: '1.2em',
                                fontSize: '15px',
                            }}
                            variant="body2"
                            color="text.secondary"
                        >
                            {room.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 1 /* 라인수 */,
                                WebkitBoxOrient: 'vertical',
                                wordWrap: 'break-word',
                                lineHeight: '1.2em',
                                height: '1.2em',
                                fontSize: '15px',
                            }}
                            variant="body2"
                            color="text.secondary"
                        >
                            {room.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 1 /* 라인수 */,
                                WebkitBoxOrient: 'vertical',
                                wordWrap: 'break-word',
                                lineHeight: '1.2em',
                                height: '1.2em',
                                fontSize: '15px',
                            }}
                            variant="body2"
                            color="text.secondary"
                        >
                            {`₩${room.price} /박`}
                        </Typography>
                    </Grid>
                </Grid>
            </AspectRatio>
        </Card>
    );
}

export default withStyles(styles, { withTheme: true })(RoomCard);
