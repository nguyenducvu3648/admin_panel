// src/dataProvider.js
import axios from 'axios';

const apiUrl = 'https://server-node-lpk7.onrender.com/api/shoes';

const dataProvider = {
    // Lấy danh sách các giày
    getList: async (resource, params) => {
        const response = await axios.get(apiUrl);
        const data = response.data.map(item => ({
            id: item.model,  // Sử dụng model làm id
            ...item,
        }));
        return {
            data: data,
            total: data.length,
        };
    },

    // Lấy thông tin chi tiết của 1 đôi giày, truyền model vào URL
    getOne: async (resource, params) => {
        const { id } = params;  // Lấy model từ params
        const response = await axios.get(`${apiUrl}/${id}`);  // Truyền model vào API URL
        const item = response.data;

        return {
            data: {
                id: item.model,  // Sử dụng model làm id
                ...item,
            },
        };
    },

    // Thêm mới một đôi giày
    create: async (resource, params) => {
        const response = await axios.post(apiUrl, params.data);
        const item = response.data;
        return {
            data: {
                id: item.model,  // Sử dụng model làm id
                ...item,
            },
        };
    },

    // Cập nhật thông tin một đôi giày, sử dụng model trong URL
    update: async (resource, params) => {
        const { id } = params;  // Lấy model từ params
        const response = await axios.put(`${apiUrl}/${id}`, params.data);  // Truyền model vào API URL
        const item = response.data;
        return {
            data: {
                id: item.model,  // Sử dụng model làm id
                ...item,
            },
        };
    },

    // Xóa một đôi giày, sử dụng model trong URL
    delete: async (resource, params) => {
        const { id } = params;  // Lấy model từ params
        await axios.delete(`${apiUrl}/${id}`);  // Truyền model vào API URL
        return { data: id };  // Trả về model của mục đã xóa
    },
};

export default dataProvider;
