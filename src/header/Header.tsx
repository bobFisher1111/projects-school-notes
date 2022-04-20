import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles, createStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import AccountMenu from './HeaderMenu';

const useStyles = makeStyles(() => createStyles({
  navlinks: {
    marginLeft: '10px',
    display: "flex",
  },
 logo: {
    textDecoration: "none",
    flexGrow: "1",
    color: "#506f49",
    cursor: "pointer",
    "&:hover": {
        color: "black",
    },
  },
  link: {
    textDecoration: "none",
    color: "#506f49",
    fontSize: "20px",
    marginLeft: '20px',
    "&:hover": {
      color: "black",
    },
  },
}));

const Header: React.FC<Props> = ({
one}) => {
    const classes = useStyles();

    return (
      <AppBar position="static" style={{backgroundColor: "white",  border: '1px solid #506f49', boxShadow: 'none'}}>
        <Toolbar>
          <Link to="/" className={classes.logo}>
            <Typography variant="h4">
              [Logo-Here]
            </Typography>
          </Link>
          <Link to="/tutorial" className={classes.link}>
              Tutorial
            </Link>
          <div className={classes.navlinks}>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </div>
          <AccountMenu />
        </Toolbar>
      </AppBar>
    );
  }

  export type Props = {
    one: string;
  };

  export default Header;