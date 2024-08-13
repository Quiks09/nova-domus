import * as React from 'react';
import './Css/Landing.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Landing = () => {
    const [cards, setCards] = React.useState([
        { 
            title: "Shrimp and Chorizo Paella", 
            subheader: "September 14, 2016", 
            avatarColor: red[500], 
            avatarLabel: "R",
            image: "/static/images/cards/paella.jpg", 
            imageAlt: "Paella dish",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
            expandedDescription: "This is the expanded description for Shrimp and Chorizo Paella. It includes additional details about the recipe and cooking method.",
            expanded: false
        },

    ]);

    const handleExpandClick = (index) => {
        setCards(prevCards => 
            prevCards.map((card, i) => 
                i === index ? { ...card, expanded: !card.expanded } : card
            )
        );
    };

    return (
        <div className="hero">
            <div className="cards" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {cards.map((card, index) => (
                    <Card key={index} sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: card.avatarColor }} aria-label="recipe">
                                    {card.avatarLabel}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={card.title}
                            subheader={card.subheader}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={card.image}
                            alt={card.imageAlt}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {card.description}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={card.expanded}
                                onClick={() => handleExpandClick(index)}
                                aria-expanded={card.expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={card.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>{card.expandedDescription}</Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                ))}
            </div>   
        </div>
    );
}

export default Landing;