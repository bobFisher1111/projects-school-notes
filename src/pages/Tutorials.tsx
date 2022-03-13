import React from 'react';
import { makeStyles, createStyles } from '@mui/styles'
import Grid from '@mui/material/Grid';
import CardComponent from '../components/card/Card';

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

const Tutorials: React.FC<Props> = ({
one}) => {
  const classes = useStyles();
  // move this to database later on
  const projectList = [
    {
      title: 'React Components',
      imageLink: "https://www.gameinformer.com/sites/default/files/styles/thumbnail/public/2022/02/09/cc4d89a9/xenob3.jpg",
      projectInfo: "A game I cannot wait to play",
      linkTitle: 'Learn More',
      routerLink: '/javascripttutorial',
    },
    {
      title: 'Data Analytics',
      imageLink: "https://www.gameinformer.com/sites/default/files/styles/thumbnail/public/2022/02/09/cc4d89a9/xenob3.jpg",
      projectInfo: "A game I cannot wait to play",
      linkTitle: 'Learn More',
      routerLink: '/javascripttutorial',
    },
    {
      title: 'Machine Learning',
      imageLink: "https://www.gameinformer.com/sites/default/files/styles/thumbnail/public/2022/02/09/cc4d89a9/xenob3.jpg",
      projectInfo: "A game I cannot wait to play",
      linkTitle: 'Learn More',
      routerLink: '/javascripttutorial',
    },
    {
      title: 'Game Dev',
      imageLink: "https://www.gameinformer.com/sites/default/files/styles/thumbnail/public/2022/02/09/cc4d89a9/xenob3.jpg",
      projectInfo: "A game I cannot wait to play",
      linkTitle: 'Learn More',
      routerLink: '/javascripttutorial',
    },
  ]

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {
          projectList.map((x: any) => {
            return (
              <CardComponent
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

export default Tutorials;