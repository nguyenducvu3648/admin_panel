// src/components/ShoeEdit.js
import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const ShoeEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput label="Name" source="name" />
                <TextInput label="Model" source="model" />
                <NumberInput label="Price" source="price" />
                <TextInput label="Image URL" source="imgAddress" />
                <TextInput label="Model Color" source="modelColor" />
            </SimpleForm>
        </Edit>
    );
};

export default ShoeEdit;
