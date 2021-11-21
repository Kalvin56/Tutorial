import { ListItem, Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Post({post, like}) {
    return (
        <ListItem>
            <Card sx={{ maxWidth: 345, backgroundColor: '#FCECDD' }}>
                <CardHeader
                    title={post.place}
                    subheader={post.date}
                />
                <CardMedia
                    component="img"
                    width="200"
                    image={post.url}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="like" onClick={() => like(post)}>
                        <FavoriteIcon />
                    </IconButton>
                    <Typography variant="body2" color="text.secondary">
                        {post.likes}
                    </Typography>
                </CardActions>
            </Card>
        </ListItem>
    )
}

export default Post
