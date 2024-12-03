// src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import Sidebar from './components/SideBar';
import Navbar from './components/Navbar';
import ShoeList from './components/ShoeList';
import ShoeEdit from './components/ShoeEdit';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Admin dataProvider={dataProvider} dashboard={Dashboard} appBar={Navbar} sidebar={Sidebar}>
            <Resource name="shoes" list={ShoeList} edit={ShoeEdit} />
        </Admin>
    );
};

export default App;
