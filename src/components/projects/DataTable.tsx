import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const useStyles = makeStyles(() => createStyles({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "white",
    },
    '&:nth-of-type(even)': {
      backgroundColor: "#dddddd",
    },
  },
}));

const DataTable: React.FC<Props> = ({
one}) => {
  const classes = useStyles();
  console.log('about...');
  const FavoriteVideoGames = {
    JRPG: 'Final Fantasy 8',
    RPG: 'Elder Scrolls Oblivion',
    ActionAdventure: 'Uncharted',
    FPS: 'Golden Eye N64',
    Sports: 'Virtual Tennis',
    MMO: 'Final Fantasy 14',
    Platformer: 'Conquer Bad Fur Day',
    Horror: 'Resident Evil 2',
    Stealth: 'Metal Gear Solid 1',
    BeatEmUps: 'Yakuza 0',
    RTS: 'Age of Empires 2',
  };
  
  return (
    <div>
      <h2>HTML Table</h2>
      <Table>
        <TableBody>
          {Object.entries(FavoriteVideoGames).map((x: any, y: any) => {
            return(
              <TableRow key={y} className={classes.root}>
                <TableCell>
                  {x[0]}
                </TableCell>
                <TableCell
                >
                  {x[1]}
                  </TableCell>
              </TableRow>
              )
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export type Props = {
  one: string;
};

export default DataTable;
