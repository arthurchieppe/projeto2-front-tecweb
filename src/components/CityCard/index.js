import * as React from 'react';
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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// Icons:
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import PushPinIcon from '@mui/icons-material/PushPin';  //Salvo
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';  //Ainda nao salvo

import axios from "axios";
import { WindowSharp } from '@mui/icons-material';
import { useState, useEffect} from "react";


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

// https://mui.com/components/cards/
export default function CityCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  var deleteName = '';
  
  function deleteCity(name) {
     axios
      .get(`http://127.0.0.1:8000/api/user/${props.username}/`)
      .then((response) => {
      const lsCities = response.data.cities;
      // const normalized = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      console.log(name)
      let arr = lsCities.filter(e => e !== name);
      console.log(arr) // https://stackoverflow.com/questions/9792927/javascript-array-search-and-remove-string
      axios
      .post(`http://127.0.0.1:8000/api/user/${props.username}/`, {
        "cities": arr
    })
    .then(window.location.reload())
    }); 
  }

  function buildImageUrl() {
    let url = `http://openweathermap.org/img/w/${props.image}.png`;
    return url

  }

  //https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#96D9AD" }} aria-label="Inicial da Cidade">
            {props.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={() => {deleteCity(props.name)}}>
            <DeleteForeverIcon/>
          </IconButton>
        }
        title={props.name}
        subheader={titleCase(props.children[4])}
      />
      <CardMedia
        component="img"
        height="194"
        image={buildImageUrl()}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary" sx={{ mt: 4, mb: 2 }}>
            Temperature: {Math.round(props.children[0])} °C
            <br/>
            Max Temp: {Math.round(props.children[1])} °C
            <br/>
            Min Temp: {Math.round(props.children[2])} °C
            <br/>
            Humidity: {Math.round(props.children[3])} %
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <PushPinOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
