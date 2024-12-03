// src/components/ShoeList.js
import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const ShoeList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />  {/* Đây là model */}
                <TextField source="name" />
                <TextField source="model" />
                <TextField source="price" />
                <TextField source="modelColor" />
                <EditButton basePath="/shoes" />
                <DeleteButton basePath="/shoes" />
            </Datagrid>
        </List>
    );
};

export default ShoeList;
