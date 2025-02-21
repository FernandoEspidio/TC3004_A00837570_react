import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({ title, description, image, onClick }) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
    <CardActionArea>
        <CardMedia
        component="img"
        sx={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: 2,
            padding: 1,
        }}
        image={image}
        alt={title}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
        </Typography>
        </CardContent>
    </CardActionArea>
    </Card>

  );
}
