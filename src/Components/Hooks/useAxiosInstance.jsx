import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const instance = axios.create({
    baseURL: 'https://sovereign-asset-solutions-server.vercel.app',
    withCredentials: true
});

const useAxiosInstance = () => {
    // let { logOut } = useAuth();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     instance.interceptors.response.use(res => {
    //         return res;
    //     }, error => {
    //         if (error.response.status == 401) {
    //             logOut()
    //                 .then(() => {
    //                     navigate("/login");
    //                     console.log("Logged Out Successfully");
    //                 })
    //                 .catch((error) => {
    //                     console.log(error);
    //                 });
    //         }
    //     })
    // }, [])

    return instance;
};

export default useAxiosInstance;