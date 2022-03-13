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
    // 
  },
  linkStyle: {
    textDecoration: 'none',
  }
}));

let data = project_list;

const Home: React.FC<Props> = ({
  one,
}) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <SlideShow slidesData={slideShow_data} />
      </div>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        item xs={12}
      >
        {
          data.project_list.map((x: any, index) => {
            return (
              <CardComponent
                key={index}
                title={x.title}
                imageLink={x.imageLink}
                projectInfo={x.projectInfo}
                linkTitle={x.linkTitle}
                routerLink={x.routerLink}
              />
            )
        })
      }
      </Grid>
    </>
  );
}

export type Props = {
  one: string;
};

export default Home;