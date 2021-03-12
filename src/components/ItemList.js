import React, {useState} from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import UncheckIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckIcon from '@material-ui/icons/CheckBox';

const Componente = (props) => {
    const item = props.item;
    const [completed, setIsCompleted] = useState(item.completed);

    return (
        <ListItem button key={item.id} onClick={() => setIsCompleted(!completed)}>
            <ListItemIcon>
                {completed ? <CheckIcon /> : <UncheckIcon />}
            </ListItemIcon>
            <ListItemText primary={item.title} />
        </ListItem>
    );
}

export default Componente;