import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

/*
  Title:
  Breif Description
  Give a name to a link and link it to article
*/
const useStyles = makeStyles(() => createStyles({
    root: {
      //
    },
  }));

const SlideShowTextColumn: React.FC<Props> = ({
  slidesData,
}) => {
    const classes = useStyles();
    
    return (
      <>
        <h1>Final Fantasy VIII greatest best game ever</h1>
        <h3>Final Fantasy VIII takes place in the future, protagonist Squall and his team are out to save the world</h3>
        <h2>Link to article</h2>
      </>
    );
}

export type Props = {
  slidesData: any;
};

export default SlideShowTextColumn;
