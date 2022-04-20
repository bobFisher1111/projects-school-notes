import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles'
import Grid from '@mui/material/Grid';
import CardComponent from '../components/card/Card';
import SlideShow from '../components/slideShow/SlideShow';
import project_list from '../data/project_list.json';
import slideShow_data from '../data/slideShow_data.json';

/*
  - Need to create Cards: with Images
*/
const useStyles = makeStyles(() => createStyles({
  root: {
    // backgroundColor: 'white', // lightgray, #688861
    paddingBottom: '250px',
  },
  linkStyle: {
    textDecoration: 'none',
  },
  slides: {
    // width: '480px',
    // height: '1099px', // 650px
    padding: '50px 100px',
    // height: '10%',
  },
  spaces: {
    padding: '0px 10px',
  }
}));

let data = project_list;

const Home: React.FC<Props> = ({
  one,
}) => {
  const classes = useStyles();
  // justifyContent="space-evenly"
  return (
    <div className={classes.root}>
       <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        item xs={12}
        className={classes.slides}
      >
        <SlideShow slidesData={slideShow_data} />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        item xs={12}
      >
        {
          data.project_list.map((x: any, index) => {
            return (
              <div className={classes.spaces}>
                <CardComponent
                  key={index}
                  title={x.title}
                  imageLink={x.imageLink}
                  projectInfo={x.projectInfo}
                  linkTitle={x.linkTitle}
                  routerLink={x.routerLink}
                />
              </div>
            )
        })
      }
      </Grid>
    </div>
  );
}

export type Props = {
  one: string;
};

export default Home;