import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
  linkStyle: {
    textDecoration: 'none',
  },
}));

const CardComponent: React.FC<Props> = ({
    imageLink,
    title,
    projectInfo,
    linkTitle,
    routerLink,
}) => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345, border: '1px solid #506f49'}}>
      <CardMedia
        component="img"
        height="140"
        image={imageLink}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {projectInfo}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={routerLink} className={classes.linkStyle}>
        <Typography>
          {linkTitle}
        </Typography>
      </Link>
      </CardActions>
    </Card>
  );
}

export type Props = {
    imageLink: string;
    title: string;
    projectInfo: string;
    linkTitle: string;
    routerLink: string;
};

export default CardComponent;