import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import SlideShowTextColumn from './SlideShowTextColumn';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import slide_show_images from '../../data/slideShow_data.json'

const useStyles = makeStyles(() => createStyles({
    image: {
      width: '100%',
      height: '100%',
    },
    slider: {
      position: 'relative',
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
    },
    slide: {
      opacity: '0',
      transitionDuration: '1s ease',
    },
    slideActive: {
      opacity: '1',
      transitionDuration: '1s',
      transform: 'scale(1.08)',
    },
    borderWall: {
      border: '1px solid #506f49',
    },
    description: {
      wordWrap: 'break-word', 
      paddingLeft: '20px',
    },
  }));

const SlideShow: React.FC<Props> = ({
  slidesData,
}) => {
    const classes = useStyles();
    const [currentIndexValue, setCurrentIndexValue] = useState<any>(0);
    const length = slidesData.slide_show_images.length;

    // Automatic Slideshow:
    let slideIndex = 0;
    
    return (
      <>
        {slidesData.slide_show_images.map((slide: any, index: string) => {
            return (
              <div className={(classes.slider)}>
                {index === currentIndexValue && (
                  <Grid 
                    container
                    item xs={12} 
                    className={classes.borderWall}  
                  >
                    <Grid
                      item xs={8}
                      key={index}
                    > 
                      <img 
                        src={slide.imageLink}
                        alt={slide.title}
                        className={classes.image}
                      />
                  </Grid>
                  <Grid
                    item xs={4}
                    className={classes.description}
                  >
                    <SlideShowTextColumn slidesData="" />
                  </Grid>
                  </Grid>
                  )}
              </div>
            )
          })}
        </>
    );
}

export type Props = {
  slidesData: any;
};

export default SlideShow;
