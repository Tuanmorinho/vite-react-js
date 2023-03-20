import { ITableResponse, ICustomer } from '@/models/index';
import { axiosClient } from "./axiosClient";

const customerApi = {
    getAll(): Promise<ITableResponse<ICustomer[]>> {
        const url = 'cities';
        return axiosClient.get(url);
    },
};

export default customerApi