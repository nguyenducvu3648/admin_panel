// src/components/ShoeList.js
import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const ShoeList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="model" />
                <TextField source="brand" />
                <TextField source="price" />
                <EditButton basePath="/shoes" />
                <DeleteButton basePath="/shoes" />
            </Datagrid>
        </List>
    );
};

export default ShoeList;