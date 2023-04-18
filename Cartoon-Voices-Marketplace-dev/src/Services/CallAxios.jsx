import axios from 'axios';

const CallAxios = () => {

    const url = "http://localhost:8080/voices"
    const urlComments = "http://localhost:8080/voices/comment"
    const getVoices = async () => {
        const res = await axios.get(`${url}`);
        return res.data;
    };

    const getComments = async (id) => {
        const res = await axios.get(`${urlComments}`);
        return res.data
    }
    
    const getCommentsById = async (id) => {
        const res = await axios.get(`${urlComments}/${id}`);
        return res.data
    }
    
    const createComment = async (data) => {
        const res = await axios.post(`${urlComments}`, data);
        return res.data
    }
    const deleteComment = async (id) => {
        const res = await axios.delete(`${urlComments}/${id}`);
        return res.data;
    };

    const getVoicesById = async (id) => {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    };

    const createVoice = async (data, type) => {
        if(type == "comment"){
            const res = await axios.post(`${url}/comment`, data);
            return res;
        }
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
        getComments,
        getCommentsById,
        createComment,
        deleteComment,
        urlComments,
        url
    };
};

export default CallAxios;



