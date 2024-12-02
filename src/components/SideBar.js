// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
    return (
        <div style={{ width: '250px', backgroundColor: '#f4f4f4', height: '100vh', position: 'fixed' }}>
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/shoes">
                    <ListItemText primary="Shoe List" />
                </ListItem>
                <ListItem button component={Link} to="/orders">
                    <ListItemText primary="Order List" />
                </ListItem>
                <ListItem button component={Link} to="/users">
                    <ListItemText primary="User  List" />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;