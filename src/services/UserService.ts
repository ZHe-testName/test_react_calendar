import axios, { AxiosResponse } from "axios";
import { UserType } from "../models/IUser";

//used this class to avoid code repeating
//in 'server' requests
export default class UserService {
    static async getUsers() : Promise<AxiosResponse<UserType[]>>{
        return axios.get<UserType[]>('./users.json');
    }
};