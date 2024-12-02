// src/dataProvider.js
import axios from 'axios';

const apiUrl = 'https://server-node-lpk7.onrender.com/api/shoes';

const dataProvider = {
    getList: async (resource, params) => {
        const response = await axios.get(apiUrl);
        const data = response.data.map(item => ({
            id: item._id, // Chuyển đổi _id thành id
            ...item,
        }));
        return {
            data: data,
            total: data.length,
        };
    },
    getOne: async (resource, params) => {
        const response = await axios.get(`${apiUrl}${params.id}`);
        const item = response.data;
        return {
            data: {
                id: item._id, // Chuyển đổi _id thành id
                ...item,
            },
        };
    },
    create: async (resource, params) => {
        const response = await axios.post(apiUrl, params.data);
        const item = response.data;
        return {
            data: {
                id: item._id, // Chuyển đổi _id thành id
                ...item,
            },
        };
    },
    update: async (resource, params) => {
        const response = await axios.put(`${apiUrl}${params.id}`, params.data);
        const item = response.data;
        return {
            data: {
                id: item._id, // Chuyển đổi _id thành id
                ...item,
            },
        };
    },
    delete: async (resource, params) => {
        await axios.delete(`${apiUrl}${params.id}`);
        return { data: params.id }; // Trả về id của mục đã xóa
    },
    // Bạn có thể thêm các phương thức khác nếu cần
};

export default dataProvider;