import { Avatar, List, ListItemAvatar, ListItemText, ListItem, ListItemButton, ListItemIcon, Divider } from '@mui/material';
import React from 'react';
import { isEmpty } from '../Utils';
import { useHistory} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Users({title}) {

    const history = useHistory();

    const [users, setUsers] = useState({
        data: null
    });
    
    useEffect(() => {
        axios.get('http://localhost:3000/users').then((response) => {
            setUsers({ data: response.data });
        }).catch((error) => {
            console.log(error);
        })
    }, [setUsers]);

    return (
        <List>
            <ListItem>
                <ListItemIcon sx={{ fontSize: 25 }}>🔥</ListItemIcon>
                <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                    fontSize: 25,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                    }}
                />
            </ListItem>
            <Divider />
            {!isEmpty(users.data) && users.data.map((user) => (
            <ListItemButton key={user.id} onClick={() => history.push('/user/' + user.id)}>
                <ListItemAvatar>
                    <Avatar src={user.url} />
                </ListItemAvatar>
                <ListItemText primary={user.pseudo} />
            </ListItemButton>
            ))}
      </List>
    )
}

export default Users
