import axios from 'axios';
const BASE_AUTH_URL = 'http://localhost:3500';
const BASE_INV_URL = 'http://localhost:3501';

export default axios.create({
    baseURL: BASE_AUTH_URL
});

export const axiosAuthPrivate = axios.create({
    baseURL: BASE_AUTH_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export const axiosInvPrivate = axios.create({
    baseURL: BASE_INV_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});