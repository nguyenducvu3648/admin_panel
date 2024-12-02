// src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import Sidebar from './components/SideBar';
import Navbar from './components/Navbar';
import ShoeList from './components/ShoeList';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Admin 
            dataProvider={dataProvider} 
            dashboard={Dashboard} // Sử dụng dashboard tùy chỉnh
            appBar={Navbar} // Nếu bạn muốn sử dụng Navbar tùy chỉnh
            sidebar={Sidebar} // Nếu bạn muốn sử dụng Sidebar tùy chỉnh
        >
            <Resource name="shoes" list={ShoeList} />
        </Admin>
    );
};

export default App;