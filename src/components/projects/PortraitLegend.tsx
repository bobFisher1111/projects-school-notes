import React from 'react';
import { makeStyles } from '@mui/styles';
import PinIcon from '@mui/icons-material/Pin';

const Serieslist = {
    1: 'Final Fantasy',
    2: 'Yakuza & Judgement',
    3: 'Metal Gear',
    4: 'Witcher',
    5: 'Elder Scrolls',
    6: 'Uncharted',
    7: 'Mass Effect',
    8: 'Dragon Age',
    9: 'Zelda',
    10: 'God of War'
};

const useStyles = makeStyles((theme) => ({
  root: {
    /*
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    padding: '8px',
    background: '#fff',
    border: '2px solid #666;
    color: #666;
    text-align: center;

    font: 32px Arial, sans-serif;
    */
  },
}));

console.log('array',Serieslist);

const keyList = Object.keys(Serieslist);
console.log('keys...', keyList);

const valueList = Object.values(Serieslist);
console.log('values...', valueList);

const PortraitLegend = () => {
  return (
    <>
     <PinIcon>1</PinIcon> 
    </>
  );
}

export default PortraitLegend;
