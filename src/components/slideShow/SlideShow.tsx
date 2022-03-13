import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import slide_show_images from '../../data/slideShow_data.json'

const useStyles = makeStyles(() => createStyles({
    leftArrow: {
      position: 'absolute',
      top: '50%',
      left: '32px',
      fontSize: 'large',
      color: '#000',
      zIndex: '10',
      cursor: 'pointer',
      userSelect: 'none', 
    },
    rightArrow: {
      position: 'absolute',
      top: '50%',
      right: '32px',
      fontSize: '3rem',
      color: '#000',
      zIndex: '10',
      cursor: 'pointer',
      userSelect: 'none', 
    },
    image: {
      width: '1000px',
      height: '600px',
      borderRadius: '10px',
    },
    slider: {
      position: 'relative',
      height: '100vh',
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
  }));

const SlideShow: React.FC<Props> = ({
  slidesData,
}) => {
    const classes = useStyles();
    const [currentIndexValue, setCurrentIndexValue] = useState<any>(0);
    const length = slidesData.slide_show_images.length;
    const nextSlide = () => {
      // this will start with first image and then go all way to end and start over with first image(0)
      setCurrentIndexValue(currentIndexValue === length - 1 ? 0 : currentIndexValue + 1);
    }
    const prevSlide = () => {
      // this will go back to prev image, to negative pictures
      setCurrentIndexValue(currentIndexValue === 0 ? length -1 : currentIndexValue - 1);
    }
    if(!Array.isArray(slidesData.slide_show_images) || length <= 0) {
      return null;
    }
    return (
        <section className={classes.slider}>
          <NavigateBeforeIcon
            className={classes.leftArrow}
            onClick={prevSlide}
            
          />
          <NavigateNextIcon
            className={classes.rightArrow}
            onClick={nextSlide}
          />
          {slidesData.slide_show_images.map((slide: any, index: string) => {
            return (
              <div
                className={index === currentIndexValue ? classes.slideActive : classes.slide}
                key={index}
              >
                {index === currentIndexValue && (
                  <img 
                    src={slide.imageLink}
                    alt={slide.title}
                    className={classes.image}
                  />
                )}
              </div>
            )
          })}
        </section>
    );
}

export type Props = {
  slidesData: any;
};

export default SlideShow;
