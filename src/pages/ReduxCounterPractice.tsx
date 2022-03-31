import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'; // this will bind all actions
import { actions } from '../redux/index'; // this will get all of the actions
import { makeStyles, createStyles } from '@mui/styles';

// Need to import this finish this component
const useStyles = makeStyles(() => createStyles({
    root: {
      backGroundColor: "#989898"
    },
  }));

const ReduxCounterPractice: React.FC<Props> = ({
one,
}) => {
  const classes = useStyles();
  console.log('ReduxCounterPractice...');
  
  // this will be the state inside our store
  const ContactState = useSelector((state) => {
    return state;
  });
  console.log('what is the state', ContactState);
  return (
    <div className={classes.root}>
      <h1>Contact</h1>
    </div>
  );
}

export type Props = {
  one: string;
};

export default ReduxCounterPractice;
