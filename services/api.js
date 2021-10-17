import axios from 'axios';
import Search from '../components/search';
import { getCurrentUser } from './user';

const request = axios.create({
    baseURL: 'http://103.124.95.125:1506/v1'
})

request.interceptors.response.use(
    (response) => response,
    (error) => {
        return {
            status : error.response?.status || error.status,
            message: error.message?.data?.message || error.message
        }
    }
)
request.interceptors.request.use(async(config) =>{
    if(config.requireAuth){
        const user = getCurrentUser();
        if(user){
            const token = await user.getIdToken();
            config.headers.authorization = `Bearer ${token}`
        }
    }
    return config;
})


export const getRecentReview = () => {
    return request.get('/reviews',);
}

export const getPlaceBySlug = (slug) => {
    return request.get('/places/' + slug);
}

export const getSummaryPlaceBySlug = (slug) => {
    return request.get(`/places/${slug}/summary`);
}

export const postReview = (id, data) => {
    return request.post(`/places/${id}/reviews`, data, {requireAuth: true})
}

export const uploadImages = (files) => {
    const formData = new FormData();
    files.map(file => {
      formData.append("files", file)
    })
    return request.post('/media/uploads',formData,{
        headers: {
            'content-type': 'multipart/form-data'
        },
        requireAuth: true
    })
}

export const getPlaceBySearch = (search) =>{
    return request.get('/places', {params: {search}})
}