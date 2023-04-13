import axios from 'axios';

const CallAxios = () => {

    const url = "http://localhost:8080/voices"

    const getVoices = async () => {
        const res = await axios.get(`${url}`);
        return res.data;
    };

    const getVoicesById = async (id) => {
        const res = await axios.get(`${url}/${id}`);
        return res;
    };

    const createVoice = async (data) => {
        const res = await axios.post(`${url}`, data);
        return res;
    };

    const updateVoice = async (data) => {
        const res = await axios.put(`${url}`, data);
        return res;
    };

    const deleteVoice = async (id) => {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    };

    return {
        getVoices,
        createVoice,
        updateVoice,
        deleteVoice,
        getVoicesById,
        url
    };
};

export default CallAxios;



