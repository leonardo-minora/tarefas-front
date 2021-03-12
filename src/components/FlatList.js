import React from 'react';

import ItemList from './ItemList';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Componente = props => {
    const classes = useStyles();
  return (
    <List component="nav" aria-label="main mailbox folders">
      {props.data.map( (item) => <ItemList item={item}/> )}
    </List>
  );
};

export default Componente;
