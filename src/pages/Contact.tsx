import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
    root: {
      backGroundColor: "#989898"
    },
  }));

const Contact: React.FC<Props> = ({
one,
}) => {
    const classes = useStyles();
    console.log('Contact...');
    return (
        <div className={classes.root}>
          <h1>Contact</h1>
        </div>
    );
}

export type Props = {
  one: string;
};

export default Contact;
