import React from 'react';

import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BallotIcon from '@material-ui/icons/Ballot';

const useStyles = makeStyles (theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing (2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Componente = props => {
  const classes = useStyles ();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Minha lista de tarefas
        </Typography>
        <IconButton edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="lista tarefas">
              <BallotIcon />
        </IconButton>
        <IconButton edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="lista tarefas">
              <AddCircleOutlineIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Componente;
