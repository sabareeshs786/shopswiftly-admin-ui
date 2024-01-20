import { axiosAuthPrivate, axiosInvPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {

        const authRequestIntercept = axiosAuthPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const authResponseIntercept = axiosAuthPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosAuthPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        const invRequestIntercept = axiosInvPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const invResponseIntercept = axiosInvPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosInvPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosAuthPrivate.interceptors.request.eject(authRequestIntercept);
            axiosAuthPrivate.interceptors.response.eject(authResponseIntercept);
            axiosInvPrivate.interceptors.request.eject(invRequestIntercept);
            axiosInvPrivate.interceptors.response.eject(invResponseIntercept);
        }
    }, [auth, refresh])

    return {axiosAuthPrivate, axiosInvPrivate};
}

export default useAxiosPrivate;